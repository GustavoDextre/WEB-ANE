import React, { Component } from 'react';
import '../css/contenido.css';

import WSP from '../../images/wsp.png';
import xvideos from '../../images/xvideos.png';

export default class ContenidoPrincipal extends Component {

  render() {
    return (
      <div className="m-0">
        <div className="text-center text-white py-3"><div className="display-2">HoloEdu AR</div><br/>
            <h4>Una experiencia educativa futurista</h4>
        </div>

        <div className="px-5">
            <div className="container-fluid fondoprincipal2 text-white py-3 text-center">
          {/*<h3>Argumento de la venta</h3>*/}
          <p>Buscamos generar una experiencia diferente al momento de aprender, tanto para estudiantes y para los profesores</p>
          <p>Con HoloEdu AR los estudiante podrán tener a su profesor como si estuviera frente a ellos acompañados de una experiencia interactiva de contenidos en realidad aumentada</p>
          <p>Nuestra solución permitirá dar un siguiente paso para revolucionar la educación</p>
      </div>
        </div>
      

      <div className="m-0 container-fluid text-white">
        <div className="row pt-5 px-5">
            <div className="col-lg-4 text-center p-5 fondoprincipal3">
                <h3>Descripción</h3>
                <p>Es un app de realidad aumentada que mediante un holograma de una persona, permitirá que los alumnos puedan ver a su profesor en el mismo entorno que su presentación.</p>
            </div>
            <div className="col-lg-4 text-center p-5 fondoprincipal3">
                <h3>Pitch elevator</h3>
                <br />
                <img className="cuadrovideo" src={xvideos} alt="video" />
            </div>
            <div className="col-lg-4 text-center p-5 fondoprincipal3">
                <h3>Video Demo</h3>
                {/* <p>Coming soon...</p>*/}
                <br />
                <img className="cuadrovideo" src={xvideos} alt="video" />
            </div>
        </div>
      </div>

      <div className="m-0 container-fluid">
        <div className="row pt-5 px-5">
            <div className="col-lg-6 text-center p-5 text-white fondoprincipal2">
                <h3>Reserva del producto</h3><br/>
                <button className="btn btn-primary">Solicita una demo</button>
            </div>
            <div className="col-lg-6 text-center p-5 text-white fondoprincipal2">
                <h3>Contáctanos</h3>
                <div className="p-4">
                    <a href="https://api.whatsapp.com/send?phone=975622252"><img className="cuadroWsp" src={WSP} alt="WSP de contacto" /></a>
                </div>
            </div>
        </div>
      </div>
      
    
    </div>
    )
  }
}