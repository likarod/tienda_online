import React, { Component } from 'react'

//Componentes
import Buscador from '../Buscador/Buscador'
import Novedades from '../Novedades/Novedades'

//CSS
import './Inicio.css'

export default class Inicio extends Component {
    render() {
        return (
            <div className="fondo">
                <Buscador/>
                <Novedades/>
            </div>
        )
    }
}
