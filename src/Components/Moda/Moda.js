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
            },
            inicial: 0,
            limit: 10,
        }

        this.manejoFiltros = this.manejoFiltros.bind(this)
    }

    componentDidMount(){
        fetch('http://localhost:5000/novedades')
        .then(response=> response.json())
        .then(res=> {
            this.setState({
                moda:res
            })
        })
    }

  

    componentDidUpdate(prevProps, prevState) {
        if(prevState.filtro !== this.state.filtros) {
            console.log('Se ha cambiado el filtro')
        }
       
    } 

    masArticulos = () => {
        let count = 10
        console.log('PRESIONADO')
        this.setState({
            [this.state.limit]: count
        })
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
                                	
                                <button className="agregar"onClick={()=> producto.metodo(tendencias)}>
                                    <img src="/images/bxs-shopping-bags.svg" alt="shopping cart"/>
                                </button>
                            </Link> 
                            </div>  
                        </div>
                        <hr/>
                        
                    </div> ).slice([this.state.inicial], [this.state.limit])}
                    <div className="btnChance" onClick={this.masArticulos}>
                        <button className="btnCambio">
                            Visualizar más
                        </button>
                    </div>
                </article>
            )}
            </CategoryConsumer>
        )
    }
}

export default Moda;