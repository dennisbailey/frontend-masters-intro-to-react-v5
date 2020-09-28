import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Sammy" animal="Dog" breed="Mutt" />
            <Pet name="Jimmy" animal="Cat" breed="Orange Tabby" />
            <Pet name="Dylan" animal="Dog" breed="Yellow Lab" />
        </div>
    );
};

render(<App />, document.getElementById("root"));
