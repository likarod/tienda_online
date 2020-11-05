import React from 'react'
import {Link} from 'react-router-dom';
import {Card} from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

//Contexto
import CategoryConsumer from '../../categoryContext'

//CSS
import 'antd/dist/antd.css';
import './Dashboard.css'

const { Meta } = Card;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nombre: this.props.datos.Name,
            precio: this.props.datos.Price + " EUR",
            categoria: this.props.datos.NameCategory,
            descripcion: this.props.datos.Description,
            talla: this.props.datos.SIZE,
            imag: "",
            parametro: this.props.parametro
        }
    }

    nuevaImagen = () =>{
        if(this.state.parametro === 'Tacones'){
            if(this.state.img !== '/imagenesPrueba/taconNegro.png')
                this.setState({img:'/imagenesPrueba/taconNegro.png'})
            return <img src="/imagenesPrueba/taconNegro.png" alt="Tacones Negro Guess"/> 
        }
        
    }

    render() {
        return (
            <CategoryConsumer>
                {(nuevo)=>(
                <article>
                    <div className="busquedaCategoria"> 
                        <div className="imagenes">  
                        </div> 
                        <Card
                            style={{ width: 400 , borderStyle: "center", alignItems: "center"}}
                            cover={this.nuevaImagen()}
                        >
                        <Meta
                            title={this.state.nombre}
                            description={this.state.precio} 
                            style={{width: 400 , textAlign: "center", marginLeft: 0, color: "red"}}
                        />
                        <Meta
                            description={this.state.descripcion}
                            style={{textDecorationColor:"black"}}
                        />
                        </Card>,                     
                    </div> 
                    <div className="masInformacion">
                        <Link to='/resumen' className="bntInfo">
                            <button className="btnInfo" onClick={()=>nuevo.metodo(this.state)}>
                                Ver más
                            </button>
                        </Link>
                    </div> 
                </article>
                )}
            </CategoryConsumer>
        )
    }
}

export default Dashboard;