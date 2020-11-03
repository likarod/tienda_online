import React, { Component } from 'react'

//Componentes
import Buscador from '../Buscador/Buscador'
import Living from '../Living/Living'

//CSS
import './Inicio.css'

export default class Inicio extends Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }
    
    render() {
        return (
            <div ref={this.wrapper} className="fondo">
                <Buscador/>
                <Living/>
            </div>
        )
    }
}
