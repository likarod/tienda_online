import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//CSS
import './Buscador.css'

export default class Buscador extends Component {
    render() {
        return (
            <div> 
                <div className="containerPrincipal">
                    <form className="formularioBuscador">
                        <div className="divBuscador">
                            <label htmlFor="busquedaProductos" className="etq_buscador">
                                <h2 className="Buscar">BUSCAR</h2>
                                <div className="caja_buscador">
                                    <Link to={"/articulos/"}>{/* this.state.input */}
                                    <div>
                                        <input className="input_buscador" aria-autocomplete="list" autoComplete="off" autoCorrect="off" spellCheck="false" id="bigsearch" name="buscador" required="" onChange={this.cambiarEstado}>
                                        </input>
                                    </div> 
                                    <div className="btn_buscador">
                                        <box-icon name='search' size="sm"></box-icon>
                                    </div>
                                    </Link>
                                </div> 
                            </label>
                        </div>   
                        {/* {this.state.errormessage? <p>{this.state.errormessage}</p>:""}   */}
                    </form>
                </div> 
            </div>
        )
    }
}
