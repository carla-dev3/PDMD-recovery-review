import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Ejercicio1 from './components/Ejercicio1';
import EXSeconView from './components/EXSecondView';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Switch>
          <Route path={'/'} exact>
            <Main></Main>
          </Route>
          <Route path={'/EXSeconView'}>
            <EXSeconView></EXSeconView>
          </Route>
          <Route path={'/Ejercicio1'}>
            <Ejercicio1></Ejercicio1>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
