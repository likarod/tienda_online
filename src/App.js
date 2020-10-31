import { BrowserRouter, Switch } from 'react-router-dom';

// Componentes
import Nav from './Components/Nav/Nav'

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
    </BrowserRouter>
    </div>
  );
}

export default App;
