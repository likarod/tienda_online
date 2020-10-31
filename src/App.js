import { BrowserRouter, Switch } from 'react-router-dom';

// Componentes
import Nav from './Components/Nav/Nav'
import Main from './Components/Main/Main'
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
         <Main/>
        </Switch>
      </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
