import React from 'react'
import { NavLink } from "react-router-dom";
import user from '../img/usuario-default.png'
import '../style/login.css'
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheckSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class welcome extends React.Component {
    render() {
        return <div>
            <div >
                <NavLink to="/" className="nav-link">
                    <FontAwesomeIcon id="arrow" icon={faArrowLeft} size="3x" />
                </NavLink>
            </div>
            <div className="logo mt-4">

                <img src={user} alt="user" />

            </div>

            <div className="col-xl-12 welcome">
                <div>
                    <h3>
                        Bienvenido
                    </h3>
                </div>
                <hr className="raya"></hr>
                <div>
                    <h3>
                        Ingresa tus ingredientes
                    </h3>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-xl-5">
                        <div className="box">
                            <div>
                                <label >Nombre del alimento </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div>
                                <h6>Peso en gramos(opcional) una pieza</h6>
                            </div>
                            <div className="botones-abajo">
                                <div>
                                    <button type="button" className="btn btn-outline-success">Añadir</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-outline-danger">Cancelar</button>
                                </div>
                            </div>


                        </div>

                        <div className="check">
                            <FontAwesomeIcon icon={faCheckSquare} size="3x" />

                        </div>

                    </div>
                    <div className="plus">
                        <FontAwesomeIcon icon={faPlusCircle} size="3x" />
                    </div>
                </div>

            </div>

        </div>
    }
}
export default welcome;