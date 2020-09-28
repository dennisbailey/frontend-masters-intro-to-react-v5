const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};
const App = () => {
    return React.createElement(
        "div", // What kind of element is it?
        {}, // Component attributes that will be passed into the child element. ex: { id: "important- id"}
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Sammy",
                animal: "Dog",
                breed: "Mutt",
            }), // createElement(Pet, {}, []) is the same as createElement(Pet)
            React.createElement(Pet, {
                name: "Jimmy",
                animal: "Cat",
                breed: "Orange Marmalade",
            }),
            React.createElement(Pet, {
                name: "Dylan",
                animal: "Dog",
                breed: "Yellow Lab",
            }),
        ] // Singular child or an array of children
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
