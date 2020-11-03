import React from 'react'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nombre: this.props.datos.Name,
            precio: this.props.datos.Price,
            categoria: this.props.datos.NameCategory
        }
    }
    render() {
        return (
            <article>
                <h2>Informacion objetos</h2>
                    <p>{this.state.nombre}</p>
                    <p>
                        {this.state.precio}
                    </p>
                    <p>
                        {this.state.categoria}
                    </p>
            </article>
        )
    }
}

export default Dashboard;