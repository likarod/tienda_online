import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import './Nav.css';


 
class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  

  render() {
    return (
      <div className="App-header">
        <div className="header_menu_drch"> 
          <ul className="Lista_nav">
            <box-icon  size="md" name='menu-alt-left' animation='fade-right-hover' color="white"></box-icon>
              {/* <li className="menu">Inicio</li>
              <li className="menu">Sobre nosotros</li>
              <li className="menu">Contacto</li>	   */}
          </ul>
          <Link to="/">
            <img src="/images/YugaFinal.png" alt="logoYuga" className="imagenLogo"/>
          </Link>
          <Link to="/novedades" className="link">
            <p className="linkNav">MODA</p>
          </Link>
        </div>
        <div className="header_menu_izq">
          <ul className="Lista_nav">
            <li>
              <Link to="/resumen" className="link">
                <box-icon type='solid' size="md" name='cart-alt' color="white"></box-icon>
              </Link>
            </li> 
          </ul>
        </div>
      </div>
      
    );
  }
}

export default Nav;