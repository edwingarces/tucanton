import React, { Component } from 'react'
import Menu from './Menu'
import load from '../load.gif'
import server from '../server.png'
import cloud from '../cloud.png'
import pc from '../pc.png'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class Web extends Component {
    render(){
        return(
            <div>
                <Menu />
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card orange darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                1. Menciona 3 frameworks de desarrollo del lado del cliente • Menciona 3 frameworks de desarrollo del lado del servidor • Menciona 3 servidores web
                                </span>
                                <p className="center-align">
                                R: • React.js, Vue.js, Angular.js
                                </p>
                                <p className="center-align">
                                R: • Laravel, Django, Ruby on Rails
                                </p>
                                <p className="center-align">
                                R: • IIS, Apache, Nginx
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card orange darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                2. Menciona 3 lenguajes de programación para web
                                </span>
                                <p className="center-align">
                                R: PHP, Javascript, Python
                                </p>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card orange darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                3. Menciona 3 gestores de base de datos sql
                                </span>
                                <p className="center-align">
                                R: MySQL, PostgreSQL, MariaDB
                                </p>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card orange darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                4. Menciona 2 gestores de base de datos nosql
                                </span>
                                <p className="center-align">
                                R: MongoDB, Redis
                                </p>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card orange darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                5. Explica brevemente el modelo MVC
                                </span>
                                <p className="center-align">
                                R: Se compone de tres partes Modelo, Vista y Controlador. El Modelo se encarga
                                de manejar los datos de una estructura específica que nosotros creemos. El Controlador 
                                se encarga de controlar o manejar las solicitudes que hace el usuario, solicitando al 
                                Modelo los datos y comunicándoselos a nuestras vistas. Y la Vista es la que nos muestra 
                                en un entorno gráfico estos datos procesados por el controlador.
                                </p>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card orange darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                6. Realiza un diagrama que explique como funciona una arquitectura web
                                </span>
                                <div className="row">
                                    <div className="col m4 s4">
                                        <img src={pc} style={{width: '80%'}} alt="pc"/>
                                    </div>
                                    <div className="col m4 s4">
                                        =>
                                        <img src={cloud} style={{width: '80%'}} alt="cloud"/>
                                    </div>
                                    <div className="col m4 s4">
                                        => <img src={server} style={{width: '80%'}} alt="server"/>
                                    </div>
                                </div>
                                <p className="center-align">
                                R: La arquitectura de un sistema web está dado por tres factores: El servidor, el cliente y la Internet,
                                que nos proporciona el canal para la transferencia de datos a través del protocolo HTTP.
                                El cliente genera una peticiíon que viaja a través de internet a un servidor que se encarga de devolver 
                                los documentos solicitados.
                                </p>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Web;