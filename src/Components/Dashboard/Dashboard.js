import React from 'react'

//Contexto
import CategoryConsumer from '../../categoryContext'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nombre: this.props.datos.Name,
            precio: this.props.datos.Price,
            categoria: this.props.datos.NameCategory,
            descripcion: this.props.datos.Description,
            imag: this.props.datos.Images
        }
    }
    render() {
        return (
            <CategoryConsumer>
                {(nuevo)=>(
                <article>
                    <div className="busquedaCategoria">
                        <div className="imagen">
                            <img src={this.state.imag} alt="Foto imagen"/>
                            {console.log(this.state.imag)}
                        </div>
                        <div className="nombre">
                            <p>{this.state.nombre}</p>  
                        </div>   
                    
                        <div className="precio">
                            <h5>
                                {this.state.precio}
                                EUR
                            </h5>
                        </div>
                        <div className="categoria">
                            <p>
                                {this.state.categoria}
                            </p>
                        </div>
                        <div className="descripcionPrincipal">
                            <p>
                                {this.state.descripcion}
                            </p>
                        </div>
                    </div> 
                </article>
                )}
            </CategoryConsumer>
        )
    }
}

export default Dashboard;