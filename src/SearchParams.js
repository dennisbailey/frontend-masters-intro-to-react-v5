import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results.js";
import useDropdown from "./useDropdown.js";

const SearchParams = () => {
    // Hooks
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [pets, setPets] = useState([]);

    // Custom Hooks
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal,
        });

        setPets(animals || []);
    }

    // useEffect is called after the first render
    // It's called if the parameters (animal, setBreed, setBreeds) defined in the second argument have changed
    // It's called ony once when the second argument is an empty array
    // It's called when anything updates if the second argument is undefined
    useEffect(() => {
        // Reset
        setBreeds([]);
        setBreed("");

        // Query the API to return animal specific breeds
        pet.breeds(animal).then(
            ({ breeds }) => {
                const breedStrings = breeds.map(({ name }) => name);
                setBreeds(breedStrings);
            },
            (error) => console.error
        );
    }, [animal, setBreed, setBreeds]);

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
