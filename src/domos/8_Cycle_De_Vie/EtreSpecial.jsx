import { useEffect, useState } from "react"

export const EtreSpecial = ()=>{
    const [ age, setAge ] = useState(0);
    const [anniversaires, setAnniversaires] = useState(0);
// useEffect prend deux parametre
// la fonction à exicuter quand le useEfect à se déclencher 
// les dépendances qui autorisent le useEffect à déclenché 
    useEffect(() =>{
        setAge( prev => prev + 1)
        // setEtreAnniversaire(false)
        console.log('L\'être spécial est "né" ');
        return ()=>{
            console.log('L\'être spécial est "mort" ');
        }
    }, [ anniversaires])
    return (
        <div>
            Ma maman elle dit je suis chpéchial, j'ai {age} ans
            <button  onClick={()=> setAnniversaires (prev => prev+1)}>C'est mon anniversaire</button>
        </div>
    )
}