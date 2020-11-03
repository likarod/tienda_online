import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

//CSS
import './Living.css'

export default class Living extends Component {
    
    render() {
        return (
            <article>
                
                <div  className="divNovedades">
                    <div className="line"></div>
                    <div className="novedades">
                        <h1 className="tituloNovedad">
                            US 365
                        </h1>
                    </div>
                    <div className="carousel">    
                        <img
                         className="imagenCarousel"
                        src="/images/novedades/beyourself.jpg"
                        alt="Imagen 1"
                        />
                                    {/* <h5>Lo mejor de ti no es sólo la moda.</h5> */}
                                    <img
                                    className="imagenCarousel"
                                    src="/images/novedades/diversity.jpg"
                                    alt="Imagen 2"
                                    />
                                
                                    {/* <h5>Juntándonos desde la distancia</h5> */}
                                    <img
                                    className="imagenCarousel"
                                    src="/images/novedades/union.jpg"
                                    alt="Third slide"
                                    />
                                    {/* <h5>Tu cuerpo va más alla de las tallas.</h5> */}
                        </div>
                    </div>
            </article>
        )
    }
}
