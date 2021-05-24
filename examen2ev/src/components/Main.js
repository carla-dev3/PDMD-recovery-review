import * as React from 'react';
import { NavLink } from 'react-router-dom';
import EXButton from './EXButton';
import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Welcome to the IT world"
        }
    }

    componentDidMount() {
        this.setState({title: "Already in!"});
        console.log("Change for exercise 3, done");
    }    
    
    render() {
        const callMe = (text) => {
            this.setState({title: text});
        }

        const btnMargin = {
            marginBottom: 10
        }

        return (
            <div className='alignAll'>
                <h1>{this.state.title}</h1>
                <NavLink to={'/Ejercicio1'} style={btnMargin}><button>Exercise 2 and 5</button></NavLink>
                <NavLink to={'/EXSeconView'} style={btnMargin}><button>Exercise 4</button></NavLink>              
                <EXButton onClick={() => callMe("Here button. I called you!")} title='Exercise 6'></EXButton>  
            </div>
        )
    }
}

export default Main;