import React, { Component } from 'react'

//Componentes
import Articulos from '../Articulos/Articulos'

export default class Contenido extends Component {
    render() {
        return (
            <div>
                {/*Aquí es donde se realizará la organización de los artículos. Especialmente por el nombre y/o categoría */}
                <Articulos/>
            </div>
        )
    }
}
