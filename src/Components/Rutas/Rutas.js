import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

//Componentes
import Inicio from '../Inicio/Inicio'

export default class Rutas extends Component {
    render() {
        return (
            <section>
                <Switch>
                  <Route exact path="/" component={Inicio}/>
                </Switch>
            </section>
        )
    }
}
