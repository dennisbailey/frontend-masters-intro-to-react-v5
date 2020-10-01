import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
    state = {
        loading: true,
    };

    // Runs once when the component mounts
    componentDidMount() {
        pet.animal(this.props.id).then(({ animal }) => {
            const {
                name,
                type,
                contact,
                description,
                photos,
                breeds,
                url,
            } = animal;
            this.setState({
                name,
                animal: type,
                location: `${contact.address.city}, ${contact.address.state}`,
                description,
                media: photos,
                breed: breeds.primary,
                loading: false,
            });
        }, console.error);
    }

    render() {
        if (this.state.loading) {
            return <h1> Loading… </h1>;
        }
        const {
            animal,
            breed,
            location,
            description,
            name,
            media,
        } = this.state;

        return (
            <div className="details">
                <Carousel media={media} />
                <div>
                    <h1> {name} </h1>
                    <h2> {`${animal} - ${breed} - ${location}`} </h2>
                    <ThemeContext.Consumer>
                        {(themeHook) => (
                            <button style={{ backgroundColor: themeHook[0] }}>
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>

                    <p> {description} </p>
                </div>
            </div>
        );
    }
}

export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}
