import EXButton from "./EXButton";
import * as React from 'react';

class PrincialView extends React.Component {

    render() {
        const justDoIt = () => {
            console.log("Exercise 5 done!");
        }
        return(
            <div>
                <EXButton onClick={justDoIt} title= 'Listo para hacer clic'></EXButton>
            </div>

        );

    }
}

export default PrincialView;