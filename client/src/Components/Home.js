import React, { Component } from 'react'
import axios from 'axios'
import Menu from './Menu'
import load from '../load.gif'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Home extends Component {

    state = {
        teams: [],
        users: [],
        clients: [],
        team: '',
        user: ''
    };

    componentDidMount() {
        let overlay = document.getElementsByClassName('sidenav-overlay');
        overlay[0].setAttribute('style', 'display: none');
        M.AutoInit();

        this.getTeamsFromDb();
    }

    componentDidUpdate(){
        let overlay = document.getElementsByClassName('sidenav-overlay');
        overlay[0].setAttribute('style', 'display: none');
        M.AutoInit();
    }

    getTeamsFromDb = () => {
        fetch('http://localhost:3001/api/team/getAll')
            .then((data) => data.json())
            .then((res) => {
                this.setState({ teams: res.data })
            });
    };

    getUsersFromDb = (team) => {
        fetch('http://localhost:3001/api/user/get/' + team)
            .then((data) => data.json())
            .then((res) => {
                this.setState({ users: res.data })
            });
    };

    getClientsFromDb = (user) => {
        fetch('http://localhost:3001/api/client/get/' + user)
            .then((data) => data.json())
            .then((res) => {
                this.setState({ clients: res.data })
            });
    };

    render(){
        const { teams } = this.state;
        let count = 0;
        return(
            <div>
                <Menu />
                {
                    teams.length <= 0 ?
                    (
                        <div className="row">
                            <div className="col s12 m6 offset-m3">
                                <div className="card teal accent-4">
                                    <div className="card-content white-text">
                                        <p className="center-align">Aún no has agregado ningún equipo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div>
                            <div className="row">
                                <div className="col s12 m6 offset-m3">
                                    <select value={this.state.team} onChange={(e) => {this.setState({team : e.target.value}); this.getUsersFromDb(e.target.value);}}>
                                        <option value="" disabled selected >Selecciona un equipo</option>
                                        {
                                            teams.map((team) => (
                                                <option key={team._id} value={team._id}>{team.name}</option>
                                            ))
                                        }
                                    </select>
                                    {
                                        this.state.users.length > 0 ?
                                        (
                                            <select value={this.state.user} onChange={(e) => {this.setState({user : e.target.value}); this.getClientsFromDb(e.target.value)}}>
                                                <option value="" disabled selected >Selecciona un equipo</option>
                                                {
                                                    this.state.users.map((team) => (
                                                        <option key={team._id} value={team._id}>{team.name}</option>
                                                    ))
                                                }
                                            </select>
                                        )
                                        :
                                        (
                                            <div>                                                
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            {
                                this.state.clients.length <= 0 ? 
                                (
                                    <div>                                        
                                    </div>
                                )
                                :
                                (
                                    <div className="row">
                                        <div className="col s12 m10 offset-m1">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nombre</th>
                                                <th>Usuario</th>
                                                <th>Email</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {
                                                this.state.clients.map((client) => (
                                                    <tr key={client._id}>
                                                        <td>{++count}</td>
                                                        <td>{client.name}</td>
                                                        <td>{client.user.name}</td>
                                                        <td>{client.email}</td>                                                        
                                                    </tr>
                                                ))
                                            }
                                             </tbody>
                                        </table>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        )
    }

}

export default Home;