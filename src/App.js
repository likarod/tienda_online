import React, {useState} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';


// Contexto
import {CategoryProvider} from './categoryContext';

// Componentes
import Nav from './Components/Nav/Nav'
import Rutas from './Components/Rutas/Rutas'

//CSS
import './App.css';
import 'antd/dist/antd.css';

function App() {

  const [category, setCategory] = useState("");

  return (
    <div className="App">
    <CategoryProvider value={{detalle:category, metodo:setCategory}}>
      <BrowserRouter>
        <header className="App-header">
          <Switch>
          <Nav/>
          </Switch>
        </header>
        <main>
          <Switch>
            <Rutas/>
          </Switch>
        </main>
      </BrowserRouter>
    </CategoryProvider>
    </div>
  );
}

export default App;
