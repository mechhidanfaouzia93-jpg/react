import { useState } from "react";
import { EtreVivant } from "./EtreVivant";
import { EtreSpecial } from "./EtreSpecial";



export const LaVie =() =>{
    const [ etreVivants, setEtreVivants ] = useState([]);

    const [ monterEtreSpecial, setMonter ]= useState(false)

    const types = ['Humain', 'Animal', 'Bactérie']

    const naissance = ()=>{
        const nouvelEtre ={
            id : Date.now(),
            type : types[Math.floor (Math.random()*3)]
        }
        setEtreVivants([...etreVivants, nouvelEtre ])
    }

    return (
        <div>
            <h2>C'est l'histoiiiiiire de la vie </h2>
            <button  onClick={naissance}>Faire naitre quelque chose</button>
            {
                etreVivants.map( etre =><EtreVivant key= {etre.id} etre={etre} />)
            }

            <h3>L'être spécial dont personne ne veut : (aka: ne faites jamais ça)</h3>
            <button onClick={()=>{setMonter(!monterEtreSpecial)}}>Afficher/cacher</button>
            {
                monterEtreSpecial && <EtreSpecial />
            }

        </div>
    )
}