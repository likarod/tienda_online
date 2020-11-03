import React from 'react';
import {Link} from 'react-router-dom';

//
import './Moda.css'

class Moda extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            moda: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/novedades')
        .then(response=> response.json())
        .then(res=>this.setState({moda:res}))
    }


    render(){
        return(
            <article>
                <h3>Ultimas tendencias</h3>
                {this.state.moda.map((tendencias=> 
                <div className="containerTendencias">
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
                                <img src="/images/bxs-shopping-bags.svg" alt="shopping cart"/>	
                                <button className="agregar">
                                    AÑADIR	
                                </button>
                            </Link> 
                        </div>  
                    </div>
                    <hr/>
                </div> ))}
                {/*onClick={()=> articulos.metodo(this.state)}*/}
            </article>
        )
    }
}

export default Moda;