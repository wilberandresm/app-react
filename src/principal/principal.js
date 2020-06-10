import React from 'react';
import Nav from '../components/navbar'
import Login from '../components/login'

import '../components/style/stylesP.css'
class principal extends React.Component {
    render() {
        return (

            <div className="contenedor">

                <div><Nav /></div>
                <div className="cont-login"><Login /></div>

            </div>

        );

    }
}
export default principal;