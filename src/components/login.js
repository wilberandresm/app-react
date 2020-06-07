import React from 'react'
import ecfood from './img/ecfood_logo.png'
import './style/login.css'
class login extends React.Component {
    render() {
        return <div>
            <div className="logo mt-4">
                <img src={ecfood} alt="logo" />
            </div>

            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <form className="col-xl-5">

                            <div className=" col-12 form-group">
                                <label >Nombre de usuario o correo </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className=" col-12 form-group">
                                <label >Contraseña </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>


                            <div className=" col-12 form-group">
                                <button type="button" className="btn  btn-lg btn-block button-login">Iniciar sesión</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    }
}
export default login;