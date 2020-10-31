import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

import Menu from '../Menu/Menu'
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
              <li><Menu/></li>
            </ul>
          </div>
          <div className="header_menu_izq">
            <ul className="Lista_nav">
              <Dropdown>
                <div className="div_items">
                  <li>
                    <Link to="/resumen" className="link">
                      <box-icon type='solid' size="md" name='cart-alt'></box-icon>
                    </Link>
                  </li> 
                </div>
              </Dropdown>
            </ul>
        </div>
      </div>
      
    );
  }
}

export default Nav;