import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './Store';
import { GetPokemon } from './actions/PokemonActions';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState('');
    const pokemonState = useSelector((state: RootStore) => state);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setPokemonName(event.target.value);
    const handleSubmit = () => dispatch(GetPokemon(pokemonName));

    const pokemon = pokemonState?.pokemonReducer?.pokemon;
    console.log(pokemon);

    return (
        <div className="App">
            <br />
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Search</button>
            {pokemon && (
                <div>
                    <img src={pokemon.sprites.front_default} alt="" />
                    {pokemon.abilities.map((ability) => {
                        return <p>{ability.ability.name}</p>;
                    })}
                </div>
            )}
        </div>
    );
}

export default App;
