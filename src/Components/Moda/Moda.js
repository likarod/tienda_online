import React from 'react';
import {Link} from 'react-router-dom';

//Componentes
import CheckBox from '../Filtros/CheckBox'

//Contexto
import CategoryConsumer from '../../categoryContext'


import './Moda.css'
// import { CardImg } from 'react-bootstrap';

class Moda extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            moda: [],
            filtros: {
                categoria: [],
                precio: []
            }
        }

        this.manejoFiltros = this.manejoFiltros.bind(this)
    }

    componentDidMount(){
        fetch('http://localhost:5000/novedades')
        .then(response=> response.json())
        .then(res=>this.setState({moda:res}))
    }

  



    componentDidUpdate(prevProps, prevState) {
        if(prevState.filtro !== this.state.filtros) {
            console.log('Se ha cambiado el filtro')
        }
       
    } 


    manejoPrecio = (valor) => {
       console.log(valor)
    }

    manejoFiltros = (filtros, categoria) =>{
        const newFilter = { ...filtros};
        newFilter[categoria] = filtros;
        // this.cambiarEstado(newFilter)
        this.setState({[filtros]:newFilter});
        console.log(newFilter);
    }
    
    

    render(){
        return(
            <CategoryConsumer>
            {(producto) => (
                <article>
                    <h3>Ultimas tendencias</h3>
                    {/* Componente de filtrado.
                    Se envía por props el state moda para que pueda realizarse el proceso de filtrado*/}
                    <CheckBox 
                        datos={this.state.moda}
                        manejoFiltros={(filtros)=>this.manejoFiltros(filtros, "categoria")}
                    />
                    {/* Con el .map se recorre el array de JSON que viene directamente desde la BD. Después se renderizan según los productos. */}
                    {this.state.moda.map((tendencias, index)=>    
                    <div className="containerTendencias" key={index}>
                        <div className="articulosTendencias"> 
                        
                        <div className="nombre">
                            <p className="nombreProductos">
                                {console.log(tendencias)}
                                {tendencias.Name} 
                            </p>
                        </div>
                            {/* <hr/> */}
                        <div className="informacion">
                            <div className="preciosProductos">
                                <h5>
                                    {tendencias.Price} EUR
                                </h5>
                                </div>
                            </div>
                        <div className="btnProductos">
                            <Link to="/resumen">
                                <img src="/images/bxs-shopping-bags.svg" alt="shopping cart"/>	
                                <button className="agregar"onClick={()=> producto.metodo(tendencias)}>
                                    AÑADIR	
                                </button>
                            </Link> 
                            </div>  
                        </div>
                        <hr/>
                    </div> )}
                </article>
            )}
            </CategoryConsumer>
        )
    }
}

export default Moda;