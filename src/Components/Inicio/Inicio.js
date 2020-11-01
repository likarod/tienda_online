import React, { Component } from 'react'

//Componentes
import Buscador from '../Buscador/Buscador'
import Ofertas from '../Ofertas/Ofertas'

export default class Inicio extends Component {
    render() {
        return (
            <article>
                <Buscador/>
                <Ofertas/>
            </article>
        )
    }
}
