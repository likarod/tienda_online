import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//CSS
import './Buscador.css'

export default class Buscador extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: "",
        }
    }

    buscarProducto = (e) => {
        this.setState({input: e.target.value})
        console.log(this.state.input)
    }

    render() {
        return (
            <article> 
                <div className="containerPrincipal">
                    <form className="formularioBuscador">
                        <div className="divBuscador">
                            <label htmlFor="busquedaProductos" className="etq_buscador">
                                <h2 className="Buscar">BUSCAR</h2>
                                <div className="caja_buscador">
                                    <div className="div_caja_buscador">
                                       <input className="input_buscador" aria-autocomplete="list" autoComplete="off" autoCorrect="off" spellCheck="false" id="bigsearch" name="buscador" required="" onChange={this.buscarProducto}>
                                        </input> 
                                    </div>
                                    
                                    <div className="btn_buscador">
                                        <Link to={"/articulos/" + this.state.input} >
                                            
                                            <box-icon name='search' size="sm" className="btn_buscador"> 
                                            </box-icon>
                                        </Link>
                                    </div>
                                </div> 
                            </label>
                        </div>   
                        {/* {this.state.errormessage? <p>{this.state.errormessage}</p>:""}   */}
                    </form>
                </div> 
            </article>
        )
    }
}
