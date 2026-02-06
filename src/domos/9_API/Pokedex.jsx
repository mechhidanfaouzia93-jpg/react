import { useState } from 'react'
import style from './Pokedex.module.css'
import { Pokemon } from './Pokemon'
import { PokemonList } from './PokemonList'

export const Pokedex = ( ) =>{
    const [pokemonName, setPkmName] = useState();

    const changeName =(name)=>{
        setPkmName(name);
    }
    return (
        <div className={style.container}>
            
           <PokemonList  onPkmSelection={changeName} />
           <Pokemon name={ pokemonName} />


        </div>
    )
}