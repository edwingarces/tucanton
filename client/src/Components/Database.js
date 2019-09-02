import React, { Component } from 'react'
import Menu from './Menu'
import load from '../load.gif'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class Database extends Component {
    render(){
        return(
            <div>
                <Menu/>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card orange darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                1. Genera una consulta que obtenga los siguientes campos:

                                - idusuario
                                - correo
                                - nombre
                                - nombre_equipo
                                </span>
                                <p className="center-align">
                                R:
                                </p>
                                <code>
                                    SELECT usuarios.idusuario, contactos.correo, usuarios.nombre, equipos.nombre_equipo FROM usuarios 
                                    INNER JOIN contactos ON usuarios.idusuario = contactos.idusuario
                                    INNER JOIN equipos ON usuarios.idequipo = equipos.idequipo
                                    WHERE 1 = 1 
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card orange darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                2. Genera una consulta que obtenga los siguientes campos incluyendo solo los registros del mes actual ordenados por fecha en forma descendente:

                                - idusuario
                                - correo
                                - nombre
                                - nombre_equipo
                                - mes
                                </span>
                                <p className="center-align">
                                R:
                                </p>
                                <code>
                                    SELECT usuarios.idusuario, contactos.correo, usuarios.nombre, equipos.nombre_equipo, MONTH(CURDATE()) AS mes FROM usuarios 
                                    INNER JOIN contactos ON usuarios.idusuario = contactos.idusuario
                                    INNER JOIN equipos ON usuarios.idequipo = equipos.idequipo
                                    WHERE MONTH(contactos.fecha) = MONTH(CURDATE()) ORDER BY mes DESC
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Database;