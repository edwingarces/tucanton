import React, { Component } from 'react'
import axios from 'axios'
import Menu from './Menu'
import load from '../load.gif'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class Users extends Component {

    state = {
        data: [],
        teams: [],
        name: '',
        teamId: '',
        idToDelete: null,
        idToUpdate: null,
        tooltipped: false,
        objectToUpdate: null,
        updateToApply: '',
        teamUpdate: '',
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
        fetch('http://localhost:3001/api/user/getAll')
            .then((data) => data.json())
            .then((res) => {
                this.setState({ data: res.data })
                if(this.state.tooltipped === false){
                    var tooltip = document.querySelectorAll('.tooltipped');
                    M.Tooltip.init(tooltip);
                }
            });
    };

    getTeamsFromDb = () => {
        fetch('http://localhost:3001/api/team/getAll')
            .then((data) => data.json())
            .then((res) => {
                this.setState({ teams: res.data })
            });
    };

    putDataToDB = () => {
        this.setState({ load: true });
        axios.post('http://localhost:3001/api/user/create', {
            name: this.state.name,
            team: this.state.teamId
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
                teamId: '',
                load: false
            });
        })
    };

    deleteFromDB = (id) => {
        this.setState({load: true});
        parseInt(id);

        axios.delete('http://localhost:3001/api/user/delete', {
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

        axios.post('http://localhost:3001/api/user/update', {
            id: this.state.idToUpdate,
            update: { 
                name: this.state.updateToApply,
                team: this.state.teamUpdate
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

    edit = (id, name) => {
       
        this.setState({ 
            idToUpdate: id, 
            updateToApply: name, 
            hiddenUpdate: false 
        }); 
        
    };

    renderTeams = (teams) => {
        let rend = teams.map((team) => (
            <option value={team._id} key={team._id}>{team.name}</option>
        ))
        return rend;
    }

    render() {
        const { data } = this.state;
        const { teams } = this.state;
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
                                        <th>Equipo</th>
                                        <th>Acciones</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        data.map((dat) => (  
                                            <tr key={dat._id}>
                                                <td>{++count}</td>
                                                <td>{dat.name}</td>
                                                <td>{dat.team.name}</td>
                                                <td>
                                                    <button className="btn-floating btn-small waves-effect waves-light teal accent-4 tooltipped" data-position="top" data-tooltip="Editar" onClick={() => {this.edit(dat._id, dat.name); this.getTeamsFromDb();}} style={{marginRight: '3px'}}><i className="material-icons">edit</i></button>
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
                    <button className="btn-floating btn-large waves-effect waves-light red" onClick={() => {this.setState({ hiddenAdd: !this.state.hiddenAdd }); this.getTeamsFromDb();}}><i className="material-icons">add</i></button>
                </div>
                <div className={this.state.hiddenAdd === true ? 'hide' : ''} style={{ padding: '10px' }}>
                    <input
                        type="text"
                        onChange={(e) => this.setState({ name: e.target.value })}
                        value={this.state.name}
                        placeholder="Nombre"
                    />
                    <select defaultValue={'noId'} onChange={(e) => {this.setState({teamId : e.target.value})}}>
                        <option defaultValue={'noId'} disabled selected >Selecciona un equipo</option>
                        {
                            this.renderTeams(teams)
                        }
                    </select>
                    <button className="btn waves-effect waves-light red" onClick={() => this.putDataToDB()}>Agregar</button>
                </div>
                <div className={this.state.hiddenUpdate === true ? 'hide' : ''} style={{ padding: '10px' }}>
                    <input
                        type="text"
                        onChange={(e) => this.setState({ updateToApply: e.target.value })}
                        value={this.state.updateToApply}
                    />
                    <select defaultValue={this.state.teamId} onChange={(e) => {this.setState({teamUpdate : e.target.value})}}>
                        <option value="" disabled selected >Selecciona un equipo</option>
                        {
                            teams.map((team) => (
                                <option value={team._id} key={team._id}>{team.name}</option>
                            ))
                        }
                    </select>
                    <button className="btn waves-effect red" onClick={() => this.updateDB()}>
                        Actualizar
                    </button>
                </div>

                <img src={load} className={this.state.load === false ? 'hide' : ''} style={{width: '50px'}} />
                
            </div>
        );
    };
    
}

export default Users;