import React from "react";
import ReactDOM from "react-dom";

import One from "./one";

class Todo extends React.Component{
     render(){
        return(
            <div>
                <One />
            </div>
    );
};
}
ReactDOM.render(<Todo />, document.getElementById("root"));
