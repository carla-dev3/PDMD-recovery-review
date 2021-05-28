import EXButton from "./EXButton";
import * as React from 'react';

class PrincialView extends React.Component {
    constructor(props) {
        super(props);
        this.justDoIt = React.createRef();
    }

    justDoIt() {
        console.log("Exercise 5 done!");
    }

    render() {
        
        return(
            <div>
                <EXButton ref = {this.justDoIt } title= 'Listo para hacer clic'></EXButton>
            </div>

        );

    }
}

export default PrincialView;