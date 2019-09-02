import React, { Component } from 'react'
import Menu from './Menu'
import load from '../load.gif'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class Linux extends Component {
    render(){
        return(
            <div>
                <Menu/>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card orange darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                1. ¿Cuál de estas no es una distribución Linux?
                                - Debian
                                - Citrix
                                - Red Hat
                                - Caldera
                                - Mandriva
                                - Ubuntu
                                </span>
                                <p className="center-align">
                                R: Citrix
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
                                2. ¿Cuál no es un entorno de escritorio en Linux?
                                - GNOME
                                - GNODE
                                - XFCE
                                - KDE
                                </span>
                                <p className="center-align">
                                R: GNODE
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
                                3. ¿Qué comando utilizaríamos para copiar todos los archivos de una carpeta a la carpeta tmp?
                                - cp *.* /tmp
                                - cp .* /tmp
                                - cp * /tmp
                                - copy *.* /tmp
                                </span>
                                <p className="center-align">
                                R: cp .* /tmp
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
                                4. ¿Cómo se podría mostrar las lineas de un archivo llamado foo?
                                - cat -m foo
                                - cat -nn foo
                                - cat -n foo
                                - cat +n foo
                                </span>
                                <p className="center-align">
                                R: cat -n foo
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
                                5. ¿Cuál de los siguientes NO ES un directorio de la estructura de LINUX?
                                - /etc 
                                - / 
                                - /dev 
                                - /mmt.
                                </span>
                                <p className="center-align">
                                R: /mmt.
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
                                6. ¿El Directorio /etc es que el almacena los archivos de configuración del Sistema Operativo?
                                - Verdadero
                                - Falso.
                                </span>
                                <p className="center-align">
                                R: Verdadero
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
                                7. ¿En el directorio /home se almacena....?
                                - Directorios de impresoras
                                - Directorios del Sistema
                                - Directorios de Usuarios
                                - Directorios temporales
                                </span>
                                <p className="center-align">
                                R: Directorios de Usuarios
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
                                8. ¿Comando que nos permite observar las 10 ultimas lineas de un archivo?
                                - tail ejecutar.sh
                                - tail -10 ejecutar.sh
                                - tail -n 10 ejecutar.sh
                                </span>
                                <p className="center-align">
                                R: tail -10 ejecutar.sh
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
                                9. ¿En el directorio /usr/man encontramos los manuales del sistema operativo?
                                - Falso
                                - Verdadero
                                </span>
                                <p className="center-align">
                                R: Verdadero
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
                                10. ¿El comando que permite cambiar de usuario es?
                                </span>
                                <p className="center-align">
                                R: su usuario
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
                                11. ¿El comando que me permite colocar permisos a un archivo es?
                                </span>
                                <p className="center-align">
                                R: chmod
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
                                12. ¿El comando que me permite crear un usuario es?
                                </span>
                                <p className="center-align">
                                R: useradd
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
                                13. ¿El comando que me permite "montar" un dispositivo en Linux es?
                                - mount
                                - umount
                                - moount
                                - mouunt
                                </span>
                                <p className="center-align">
                                R: mount
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
                                14. ¿Comando que me permite crear directorios?
                                </span>
                                <p className="center-align">
                                R: mkdir
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
                                15. ¿comando que me permite borrar un directorio y su contenido, sin preguntar nada?
                                </span>
                                <p className="center-align">
                                R: rm -R -f
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Linux;