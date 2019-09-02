import React, { Component } from 'react'
import { Link } from 'react-router'
import bg from '../home.jpg'
import user from '../user.png'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Menu extends Component {

    componentDidMount(){
        M.AutoInit();
    }

    closeSidenav = () => {
        let sidenav = M.Sidenav.getInstance(document.getElementById('slide-out'));
        sidenav.close();
    }

    render() {
        return (
            <div>
                <nav className="teal accent-4">
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="hide-on-med-and-down">
                        <Link to={'/'} onClick={this.closeSidenav}><li style={{marginRight: '15px'}}>Inicio</li></Link>
                        <Link to={'/teams'} onClick={this.closeSidenav}><li style={{marginRight: '15px'}}>Equipos</li></Link>
                        <Link to={'/users'} onClick={this.closeSidenav}><li style={{marginRight: '15px'}}>Usuarios</li></Link>
                        <Link to={'/clients'}><li onClick={this.closeSidenav} style={{marginRight: '15px'}}>Clientes</li></Link>
                        <Link to={'/web'}><li onClick={this.closeSidenav} style={{marginRight: '15px'}}>Desarrollo Web</li></Link>
                        <Link to={'/database'}><li onClick={this.closeSidenav} style={{marginRight: '15px'}}>Base de Datos</li></Link>
                        <Link to={'/linux'}><li onClick={this.closeSidenav} style={{marginRight: '15px'}}>Linux</li></Link>
                    </ul>

                </nav>
                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <div className="overlayBg"></div>
                            <img src={bg} style={{width: '100%'}} alt="background"/>
                        </div>
                        <img className="circle" src={user} alt="user"/>
                        <span className="white-text name">Usuario</span>
                        <span className="white-text email">usuario@tucanton.com</span>
                    </div>
                    </li>
                    <li className="waves-effect" style={{width: '100%'}}><Link to={'/'}><i className="material-icons">home</i>Inicio</Link></li>
                    <li className="waves-effect" style={{width: '100%'}}><Link to={'/teams'}><i className="material-icons">people</i>Equipos</Link></li>
                    <li className="waves-effect" style={{width: '100%'}}><Link to={'/users'}><i className="material-icons">person</i>Usuarios</Link></li>
                    <li className="waves-effect" style={{width: '100%'}}><Link to={'/clients'}><i className="material-icons">person_pin</i>Clientes</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;