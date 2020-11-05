import React from 'react'

//Contexto
import CategoryConsumer from '../../categoryContext'

//CSS
import "./Detalles.css"

class Detalles extends React.Component {
    render() {
        return (
            <CategoryConsumer>
            {(categoria)=>(
            <article>
                <div className="divDetalles">
                    <h4 className="titulodetalles">
                        DETALLES DEL PRODUCTO
                    </h4>
                    <div className="detalleProducto">
                        <div className="infoProducto">
                            <div className="infoPrincipal">
                                <h5 className="nombreProducto">
                                    {categoria.detalle.Name}
                                    {categoria.detalle.nombre}
                                </h5>
                                <div className="valorProducto">
                                    <span className="precioProducto">
                                        {categoria.detalle.Price}
                                        {categoria.detalle.precio}
                                    </span>
                                    <span className="cantidad">EUR</span>
                                </div>
                            </div>
                            <div className="infoSecundaria">
                                <div className="infoCategoria">
                                    <p className="categoriaProducto">
                                        {categoria.detalle.NameCategory}
                                        {categoria.detalle.categoria}
                                    </p>
                                </div>
                                <div className="infoDecripcion">
                                    <p className="descripcionProducto">
                                        {categoria.detalle.Description}
                                        {categoria.detalle.descripcion}
                                    </p>
                                </div>
                                <div className="tallaProducto">
                                    <p className="tallaje">
                                        {categoria.detalle.SIZE}
                                        {categoria.detalle.talla}
                                    </p>
                                </div>
                            </div>
                        </div>                        
                        <div className="proveedorProducto">
                            <h4>Informacion Proveedor</h4>
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