import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Ejercicio1 from './Components/Ejercicio1';
import EXSecondView from './Components/EXSecondView';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact>
          <Main></Main>
        </Route>
        <Route path={'/EXSecondView'} exact>
          <EXSecondView></EXSecondView>
        </Route>
        <Route path={'/Ejercicio1'} exact>
          <Ejercicio1></Ejercicio1>
        </Route>
      </Switch>
    </BrowserRouter> 
    </div>
  );
}

export default App;
