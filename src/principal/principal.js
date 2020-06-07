import React from 'react';
import Nav from '../components/navbar'
import Login from '../components/login'
import Welcome from '../components/welcome'
import '../components/style/stylesP.css'
class principal extends React.Component {
    render() {
        return (

            <div className="row organizciók">
                <div className="col-xl-6">
                    <div><Nav /></div>
                    <div><Login /></div>
                </div>
                <div className="col-xl-6">
                    <div><Welcome /></div>

                </div>


            </div>



        );

    }
}
export default principal;