const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Sammy"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Mutt"),
    ]);
}
const App = () => {
    return React.createElement(
        "div", // What kind of element is it?
        {}, // Component attributes that will be passed into the child element. ex: { id: "important- id"}
        // React.createElement("h1", {}, "Adopt Me!") // Singular child or an array of children [React.createElement("h1", {}, "Adopt Me!"), React.createElement("h1", {}, "Adopt Me!")]
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {}, []), // createElement(Pet, {}, []) is the same as createElement(Pet)
            React.createElement(Pet),
            React.createElement(Pet)
        ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);