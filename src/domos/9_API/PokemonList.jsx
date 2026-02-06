import { useEffect, useState } from 'react'
import style from './Pokedex.module.css'
import axios from 'axios';

export const PokemonList = (props) => {
    
    const { onPkmSelection } = props;

    const [prevRequest, setPrevRequest] = useState();

    const [nextRequest, setNextRequest] = useState();

    const [pokemons, setPokemons] = useState([]);

    const [error, setError] = useState('')

    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((response) => {
                console.log(response.data)
                setPrevRequest(response.data.previous)
                setNextRequest(response.data.next)

                setPokemons(response.data.results)

            })
            .catch((error) => {
                console.log(error)
                setError('Oupsyyy 🤭😓 une erreur est survenue avec l\'API')
            })
    

    }, []);

    const getPokemons = (next)=>{
        //next est un params qui contient un booleen pour savoir si on peut les prochains pkm ou les precedentss 
      
            axios.get(next ? nextRequest : prevRequest)
            .then((response)=>{
                console.log(response.data);
                setPrevRequest(response.data.previous)
                setNextRequest(response.data.next)

                setPokemons(response.data.results)
            })
            .catch((error)=>{
                setError('Oupsyy une error est survenue avec l\'API')
            })
    }
    

    return (
        <div className={style.list}>
            <h2>Liste des Pokemons</h2>
            <ul>
                {error && <span>{error}</span>}
                {
                    pokemons.map(pokemon => (<li onClick={()=>onPkmSelection(pokemon.name)  } key={pokemon.name}>{pokemon.name} </li>))
                }

            </ul>

            <div className={style.buttons}>
                <button onClick={()=>{ getPokemons(false)  } } disabled={!prevRequest}>⬅️Precedent</button>
                <button  onClick={()=>{ getPokemons(true)  } } disabled={!nextRequest}> Suivant➡️</button>
            </div>

        </div>
    )
}