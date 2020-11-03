import React from 'react'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nombre: this.props.datos.Name,
            precio: this.props.datos.Price,
            categoria: this.props.datos.NameCategory,
            imag: this.props.datos.Images
        }
    }
    render() {
        return (
            <article>
                {console.log(this.props.datos.Images)}
                    <img src={this.state.imag} alt="Foto imagen"/>
                    <link rel="stylesheet" href={this.state.imag}/>
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