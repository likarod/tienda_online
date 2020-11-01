import React, { Component } from 'react'

//Componentes
import Articulos from '../Articulos/Articulos'

export default class Contenido extends Component {
    render() {
        return (
            <article>
                <div className="divContenido">
                    <h4 className="tituloContenido">
                        RESULTADOS DE BÚSQUEDA
                    </h4>
                   <Articulos/> 
                </div>
                {/*Aquí es donde se realizará la organización de los artículos. Especialmente por el nombre y/o categoría */}
                
            </article>
        )
    }
}
