import React from 'react'

//Componentes
import Dashboard from '../Dashboard/Dashboard'

class Contenido extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            resultados: [],
            params: this.props.match.params.query
        }
    }

    //Actualización de los elementos
    componentDidMount(){
        fetch(`http://localhost:5000/articulos/${this.state.params}`)
        .then(result => result.json())
        .then(res => this.setState({resultados:res}))
    }

    //Destrucción del componente generado.

    render() {
        return (
            <div>
                <h4>RESULTADOS DE BÚSQUEDA "{this.state.params.toUpperCase()}"</h4>
                {this.state.resultados.map((nuevo, i)=><Dashboard datos={nuevo} key={i} />)}
            </div>
        )
    }
}
export default Contenido;