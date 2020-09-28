// Your code goes here (for now)
const App = () => {
    return React.createElement(
        "div", // What kind of element is it?
        {}, // Component attributes that will be passed into the child element. ex: { id: "important- id"}
        React.createElement("h1", {}, "Adopt Me!") // Singular child or an array of children [React.createElement("h1", {}, "Adopt Me!"), React.createElement("h1", {}, "Adopt Me!")]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);