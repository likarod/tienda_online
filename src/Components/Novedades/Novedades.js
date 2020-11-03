import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

//CSS
import './Novedades.css'

export default class Novedades extends Component {
    
    render() {
        return (
            <article>
                <div  className="divNovedades">
                    <div className="novedades">
                        <h1 className="tituloNovedad">
                            NOVEDADES
                        </h1>
                    </div>
                    <div className="carousel">    
                        <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="imagenCarousel"
                                    src="/images/novedades/beyourself.jpg"
                                    alt="Imagen 1"
                                    />
                                    <Carousel.Caption>
                                    <h3>Lo mejor de ti no es sólo la moda.</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="imagenCarousel"
                                    src="/images/novedades/diversity.jpg"
                                    alt="Imagen 2"
                                    />
                                    <Carousel.Caption>
                                    <h3>Juntándonos desde la distancia</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="imagenCarousel"
                                    src="/images/novedades/union.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Tu cuerpo va más alla de las tallas.</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
            </article>
        )
    }
}
