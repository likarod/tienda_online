import React from 'react'

//Contexto
import CategoryConsumer from '../../categoryContext'

class Detalles extends React.Component {
    render() {
        return (
            <CategoryConsumer>
            {(categoria)=>(
            <article>
                <div className="divDetalles">
                    <h4 className="titulodetalles">
                        DETALLES DE SU COMPRA
                    </h4>
                    <div className="detalleProducto">
                        <div className="infoProducto">
                            <div className="infoPrincipal">
                                <h5 className="nombreProducto">
                                    {categoria.detalle.Name}
                                </h5>
                                <div className="valorProducto">
                                    <span className="precioProducto">{categoria.detalle.Price}</span>
                                    <span className="cantidad">EUR</span>
                                </div>
                            </div>
                            <div className="infoSecundaria">
                                <div className="infoCategoria">
                                    <p className="categoriaProducto">
                                        {categoria.detalle.NameCategory}
                                    </p>
                                </div>
                                <div className="infoDecripcion">
                                    <p className="descripcionProducto">
                                        {categoria.detalle.Description}
                                    </p>
                                </div>
                                <div className="tallaProducto">
                                    <p className="tallaje">
                                        {categoria.detalle.SIZE}
                                    </p>
                                </div>
                            </div>
                        </div>                        
                        <div className="proveedorProducto">
                            <div className="proveedorNombre">
                               <p className="proveedor">
                                    {categoria.detalle.NameSurname}
                                </p> 
                            </div>
                            <div className="proveedorIdentificacion">
                                <p className="identificacion">
                                    {categoria.detalle.CIF}
                                </p>
                            </div>
                            <div className="proveedorDireccion">
                                <p className="direccion">
                                    {categoria.detalle.Address} 
                                </p>    
                            </div>                             
                        </div>

                        
                    </div>
                </div>
            </article>)}
            </CategoryConsumer>
        )
    }
}

export default Detalles;