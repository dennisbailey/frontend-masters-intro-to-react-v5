import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
    // return React.createElement(
    //     "div", // What kind of element is it?
    //     {}, // Component attributes that will be passed into the child element. ex: { id: "important- id"}
    //     [
    //         React.createElement("h1", {}, "Adopt Me!"),
    //         React.createElement(Pet, {
    //             name: "Sammy",
    //             animal: "Dog",
    //             breed: "Mutt",
    //         }), // createElement(Pet, {}, []) is the same as createElement(Pet)
    //         React.createElement(Pet, {
    //             name: "Jimmy",
    //             animal: "Cat",
    //             breed: "Orange Tabby",
    //         }),
    //         React.createElement(Pet, {
    //             name: "Dylan",
    //             animal: "Dog",
    //             breed: "Yellow Lab",
    //         }),
    //     ] // Singular child or an array of children
    // );
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
