import React, { useState } from 'react';
import axios from 'axios'

const Main = () => {

    const [state, setState] = useState()

    // const swAPI = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon/1")
    //         .then(response => response.json())
    //         .then(jsonRes => console.log(jsonRes))
    //         .catch(error => console.log(error))
    // }


    const axiosCall = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
            .then(response => setState(response.data.results))
            .catch(error => console.log(error))
    }


    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <button onClick={axiosCall}>Fetch Pokemon</button>
            {
                (state) ?
                    <div>
                        {state.map((pokemon) => <h1>Name: {pokemon.name} </h1>)}
                    </div> : <h1>Click the button</h1>
            }
        </fieldset>
    )
}

export default Main
