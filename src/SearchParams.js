import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results.js";
import useDropdown from "./useDropdown.js";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
    // Hooks
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [pets, setPets] = useState([]);
    const [theme, setTheme] = useContext(ThemeContext);

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
                <label htmlFor="theme">
                    Theme
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        onBlur={(e) => setTheme(e.target.value)}
                    >
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark Blue</option>
                        <option value="mediumorchid">Medium Orchid</option>
                        <option value="chartreuse">Chartreuse</option>
                    </select>
                </label>
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
