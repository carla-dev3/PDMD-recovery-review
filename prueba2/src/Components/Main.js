import * as React from 'react';
import { NavLink } from 'react-router-dom';
import EXButton  from './EXButton';
import './Main.css';

class Main extends React.Component {
    constructor(props){

        super(props);
        this.state = {
            title: 'Welcome to the IT world!'

        }
    }

    componentDidMount() {
        this.setState({title: "Already in!"});
        console.log("Cambio al ejercicio 3, hecho");
    }

    callMe = (texto) => {
        this.setState({title: texto});

    }


    render() {

        
        const btnMargin = {
            marginBottom: 10
        }

        return(
            <div className='alignAll'>
            <h1>{this.state.title}</h1>
            <NavLink to={'/Ejercicio1'} style={btnMargin}><button>Ejercicio 2 y 5</button></NavLink>
            <NavLink to={'/EXSecondView'} style={btnMargin}><button>Ejercicio 4</button></NavLink>
            <EXButton onClick={() => this.callMe("Here button. I called you!")} title='Ejercicio 6'></EXButton>
            </div>
        )
    }
}

export default Main;