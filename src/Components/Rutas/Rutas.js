import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

//Componentes
import Inicio from '../Inicio/Inicio';
import Contenido from '../Contenido/Contenido'

export default class Rutas extends Component {
    render() {
        return (
            <section>
                <Switch>
                  <Route exact path="/" component={Inicio}/>
                  <Route exact path="/articulos/producto" component={Contenido}/>
                </Switch>
            </section>
        )
    }
}
