import React, { Component } from 'react';
import '../css/contenido.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, FlexCenterStyle } from "react-scroll-motion";

import WSP from '../../images/wsp.png';

function ContenidoPrincipal(){

  const ZoomInScrollOut = batch(Sticky(), FadeIn(), ZoomIn());
  const FadeUp = batch(Move(),Fade(), Move(), StickyIn());

  return (
    <ScrollContainer>
    <div className="m-0">
      <ScrollPage page={0}>
        <Animator animation={FadeUp}>
          <div className="text-center text-white py-3 rounded"><div className="display-2">HoloEdu AR</div><br/>
              <h4>Una experiencia educativa futurista</h4>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <div className="mt-4 px-5">
            <div className="container-fluid fondoprincipal2 text-white py-3 text-center rounded">
              <p>Buscamos generar una experiencia diferente al momento de aprender, tanto para estudiantes y para los profesores</p>
              <p>Con HoloEdu AR los estudiante podrán tener a su profesor como si estuviera frente a ellos acompañados de una experiencia interactiva de contenidos en realidad aumentada</p>
              <p>Nuestra solución permitirá dar un siguiente paso para revolucionar la educación</p>
            </div>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200),ZoomIn())}>
        <div className="mt-4 px-5">
          <div className="container-fluid fondoprincipal2 text-white py-3 text-center rounded">
            <h3>Descripción</h3>
                <p>Es un app de realidad aumentada que mediante un holograma de una persona, permitirá que los alumnos puedan ver a su profesor en el mismo entorno que su presentación.</p>
          </div>
        </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={3}>
      <Animator animation={batch(Fade())}>
          <div className="mt-4 px-5">
            <div className="container-fluid fondoprincipal2 text-white py-3 text-center rounded">
              <h3>Pitch elevator</h3>
              <iframe width="717" height="538" src="https://www.youtube.com/embed/BZZ3whdJANE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
      </Animator>
      </ScrollPage>

      <ScrollPage page={4}>
      <Animator animation={batch(Fade())}>
        <div className="mt-4 px-5">
          <div className="container-fluid fondoprincipal2 text-white py-3 text-center rounded">
            <h3>Video Demo</h3>
            <iframe width="717" height="538" src="https://www.youtube.com/embed/BZZ3whdJANE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </Animator>
      </ScrollPage>

      <ScrollPage page={5}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200),ZoomIn())}>
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
      </Animator>
      </ScrollPage>
  
  </div>
  </ScrollContainer>
  )
}

export default ContenidoPrincipal;
