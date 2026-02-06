import { useEffect } from "react";

export const EtreVivant = (props)=>{
    const { etre } = props;
// useEffect est une fonction qui se déclenche quant le composant apparait à l'ecran et qui déclenche la fontion mise en parametre
// cette fonction est la fonction exécutée quand notre composant prend vie (quand il apparait à l'écran)
    useEffect(()=>{
        console.log(etre.id + 'est né')
        return  ()=> {
            console.log(etre.id + 'est mort')
        }
    })

    // DANS cette fonction 
    return ( 
        <div>
            {
                etre.type === 'Humain' && '👩‍🦰'
            }
            {
                etre.type === 'Animal' && '😽'
            }
            {
                etre.type === 'Bactérie' && '🦠'
            }
        </div>
    )
}