import EXButton from "./EXButton";
import * as React from 'react';

class Ejercicio1 extends React.Component {
    constructor(props) {
        super(props);
        this.justDoIt = React.createRef();
      
    }

    justDoIt() {
        console.log("Ejercicio 5 hecho");
    }

    
    render() {
        
        return(
            <div>
                <EXButton ref = {this.justDoIt} title='Listo para hacer clic'></EXButton>
            </div>

        );

    }
}

export default Ejercicio1;