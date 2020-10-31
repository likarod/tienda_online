import { BrowserRouter, Switch } from 'react-router-dom';

// Componentes
import Nav from './Components/Nav/Nav'
import Rutas from './Components/Rutas/Rutas'
//CSS
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
