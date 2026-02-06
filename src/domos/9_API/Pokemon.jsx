import { useEffect, useState } from 'react';
import style from './Pokedex.module.css'
import axios from 'axios';

export const Pokemon = (props)=>{
    const { name} = props;

    const [ pokemon, setPokemon] = useState();
    //chaque fois le nom va changer on veut déclencher un effet qu
    
    useEffect(() =>{
        //todo : faire la requete pour remplir la variable pokemon avec setPokemon
        if(name){
             axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response)=>{
            console.log(response.data);
            setPokemon({
                height : response.data.height * 10 ,
                weight : response.data.weight / 10 ,
                image : response.data.sprites.other.showdown.front_default,
                types : response.data.types.map(type =>type.type.name),
                cries : response.data.cries.legacy

            })
        })
        .catch((error)=>{
            console.log(error)
        })
        }
       
    }, [name]);

    if(!name){
        return (
            <div className={style.pkm}>
                <p>Cliquez sur un pokemon pour voir ses infos</p>
            </div>
        )
    }
    return (
         <div className={style.pkm}>
            
            <h2>{name}</h2>
            <img src={pokemon?.image} alt={`image qui bouge le pokemon ${name}`} />
            <p> Poids : {pokemon?.weight}</p>
            <p>Taille : {pokemon?.height}</p>
            <p>
                <h3>Type(s)</h3>
                {
                    pokemon?.types.map(type =>(<span>{type}</span>))
                }
            </p>
            <audio  src={pokemon?.cries} controls/>
            </div>
    )
}