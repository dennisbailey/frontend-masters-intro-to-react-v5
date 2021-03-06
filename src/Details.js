import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
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
                url,
            });
        }, console.error);
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    adopt = () => navigate(this.state.url);

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
            showModal,
        } = this.state;

        return (
            <div className="details">
                <Carousel media={media} />
                <div>
                    <h1> {name} </h1>
                    <h2> {`${animal} - ${breed} - ${location}`} </h2>
                    <ThemeContext.Consumer>
                        {(themeHook) => (
                            <button
                                onClick={this.toggleModal}
                                style={{ backgroundColor: themeHook[0] }}
                            >
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>
                    <p> {description} </p>
                    {showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {name}?</h1>
                                <div className="buttons">
                                    <button onClick={this.adopt}>Yes</button>
                                    <button onClick={this.toggleModal}>
                                        No, not today
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
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
