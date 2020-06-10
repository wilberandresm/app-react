import React from 'react'
import ecfood from './img/ecfood_logo.png'
import { NavLink } from "react-router-dom";
import './style/login.css'
class login extends React.Component {
    render() {
        return <div className="content-login container">

            <div className="row justify-content-center">
                <div className="shadow p-3 mb-5 bg-white rounded">

                    <div className="logo mt-4">
                        <img src={ecfood} alt="logo" />
                    </div>

                    <div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <form className="col-12">

                                    <div className=" col-12 form-group">
                                        <label >Nombre de usuario o correo </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                    <div className=" col-12 form-group">
                                        <label >Contraseña </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>


                                    <div className=" col-12 form-group">
                                        <button type="button" className="btn  btn-lg btn-block button-login"><NavLink to="/home" className="nav-link">Iniciar sesión</NavLink></button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    }
}
export default login;