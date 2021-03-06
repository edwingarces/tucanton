import React, { Component } from 'react'
import axios from 'axios'
import Menu from './Menu'
import load from '../load.gif'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class Clients extends Component {

    state = {
        data: [],
        users: [],
        name: '',
        email: '',
        userId: '',
        idToDelete: null,
        idToUpdate: null,
        tooltipped: false,
        objectToUpdate: null,
        updateToApply: '',
        updateToApplyEmail: '',
        userUpdate: '',
        hiddenAdd: true,
        hiddenUpdate: true,
        load: false
    };

    componentDidMount() {
        let overlay = document.getElementsByClassName('sidenav-overlay');
        overlay[0].setAttribute('style', 'display: none');
        M.AutoInit();

        this.getDataFromDb();
    }

    componentDidUpdate(){
        let overlay = document.getElementsByClassName('sidenav-overlay');
        overlay[0].setAttribute('style', 'display: none');
        M.AutoInit();
    }

    getDataFromDb = () => {
        fetch('http://localhost:3001/api/client/getAll')
            .then((data) => data.json())
            .then((res) => {
                this.setState({ data: res.data })
                if(this.state.tooltipped === false){
                    var tooltip = document.querySelectorAll('.tooltipped');
                    M.Tooltip.init(tooltip);
                }
            });
    };

    getUsersFromDb = () => {
        fetch('http://localhost:3001/api/user/getAll')
            .then((data) => data.json())
            .then((res) => {
                this.setState({ users: res.data })
            });
    };

    putDataToDB = () => {
        this.setState({ load: true });
        axios.post('http://localhost:3001/api/client/create', {
            name: this.state.name,
            email: this.state.email,
            user: this.state.userId
        })
        .then((res) => {
            if(res.data.success){
                M.toast({html: 'Agregado', classes: 'teal accent-4 rounded'});
            } else {
                M.toast({html: 'Ocurrió un error', classes: 'red rounded'});
            }
            this.getDataFromDb();
            this.setState({
                hiddenAdd: true,
                name: '',
                userId: '',
                load: false
            });
        })
    };

    deleteFromDB = (id) => {
        this.setState({load: true});
        parseInt(id);

        axios.delete('http://localhost:3001/api/client/delete', {
            data: {
                id: id
            },
        })
        .then((res) => {
            if(res.data.success){
                M.toast({html: 'Eliminado', classes: 'teal accent-4 rounded'});
            } else {
                M.toast({html: 'Ocurrió un error', classes: 'red rounded'});
            }
            this.getDataFromDb();
            this.setState({ load: false });
        })
    };

    updateDB = () => {
        this.setState({load: true});

        axios.post('http://localhost:3001/api/client/update', {
            id: this.state.idToUpdate,
            update: { 
                name: this.state.updateToApply,
                user: this.state.userUpdate
            },
        })
        .then((res) => {
            if(res.data.success){
                M.toast({html: 'Actualizado', classes: 'teal accent-4 rounded'})
            } else {
                M.toast({html: 'Ocurrió un error', classes: 'red rounded'});
            }
            this.getDataFromDb();
            this.setState({
                load: false,
                hiddenUpdate: true,
                updateToApply: ''
            })
        })
    };

    edit = (id, name, email) => {
       
        this.setState({ 
            idToUpdate: id, 
            updateToApply: name, 
            updateToApplyEmail: email, 
            hiddenUpdate: false 
        }); 
        
    };

    renderUsers = (users) => {
        let rend = users.map((user) => (
            <option value={user._id} key={user._id}>{user.name}</option>
        ))
        return rend;
    }

    render() {
        const { data } = this.state;
        const { users } = this.state;
        let count = 0;
        return (
            <div>
                <Menu/>
                {data.length <= 0 ?
                (
                    <div className="row">
                        <div className="col s12 m6 offset-m3">
                            <div className="card teal accent-4">
                                <div className="card-content white-text">
                                    <p className="center-align">Aún no has agregado ningún usuario</p>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                : 
                (
                    <div className="container">
                        <div className="row">
                            <div className="col m12">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Usuario</th>
                                        <th>Email</th>
                                        <th>Acciones</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        data.map((dat) => (  
                                            <tr key={dat._id}>
                                                <td>{++count}</td>
                                                <td>{dat.name}</td>
                                                <td>{dat.user.name}</td>
                                                <td>{dat.email}</td>
                                                <td>
                                                    <button className="btn-floating btn-small waves-effect waves-light teal accent-4 tooltipped" data-position="top" data-tooltip="Editar" onClick={() => {this.edit(dat._id, dat.name, dat.email); this.getUsersFromDb();}} style={{marginRight: '3px'}}><i className="material-icons">edit</i></button>
                                                    <button className="btn-floating btn-small waves-effect waves-light red tooltipped" data-position="top" data-tooltip="Eliminar" onClick={() => {this.deleteFromDB(dat._id)}}><i className="material-icons">delete</i></button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
                }
                <div className="fixed-action-btn">
                    <button className="btn-floating btn-large waves-effect waves-light red" onClick={() => {this.setState({ hiddenAdd: !this.state.hiddenAdd }); this.getUsersFromDb();}}><i className="material-icons">add</i></button>
                </div>
                <div className={this.state.hiddenAdd === true ? 'hide' : ''} style={{ padding: '10px' }}>
                    <input
                        type="text"
                        onChange={(e) => this.setState({ name: e.target.value })}
                        value={this.state.name}
                        placeholder="Nombre"
                    />
                    <select defaultValue={'noId'} onChange={(e) => {this.setState({userId : e.target.value})}}>
                        <option defaultValue={'noId'} disabled selected >Selecciona un usuario</option>
                        {
                            this.renderUsers(users)
                        }
                    </select>
                    <input
                        type="email"
                        onChange={(e) => this.setState({ email: e.target.value })}
                        value={this.state.email}
                        placeholder="Email"
                    />
                    <button className="btn waves-effect waves-light red" onClick={() => this.putDataToDB()}>Agregar</button>
                </div>
                <div className={this.state.hiddenUpdate === true ? 'hide' : ''} style={{ padding: '10px' }}>
                    <input
                        type="text"
                        onChange={(e) => this.setState({ updateToApply: e.target.value })}
                        value={this.state.updateToApply}
                    />
                    <select defaultValue={this.state.userId} onChange={(e) => {this.setState({userUpdate : e.target.value})}}>
                        <option value="" disabled selected >Selecciona un usuario</option>
                        {
                            this.renderUsers(users)
                        }
                    </select>
                    <input
                        type="email"
                        onChange={(e) => this.setState({ updateToApplyEmail: e.target.value })}
                        value={this.state.updateToApplyEmail}
                    />
                    <button className="btn waves-effect red" onClick={() => this.updateDB()}>
                        Actualizar
                    </button>
                </div>

                <img src={load} className={this.state.load === false ? 'hide' : ''} style={{width: '50px'}} />
                
            </div>
        );
    };
    
}

export default Clients;