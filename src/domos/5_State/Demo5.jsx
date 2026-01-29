import { useState } from "react"

export const Demo5 = () => {

    // Nous allons, pour créer notre variale,
    // useState() est une fonction qui nous retourne un tableau de 2 éléments
    // 1. La variable d'état
    // 2. Une fonction qui permet de modifier cette variable d'état ,cette variable et d'indiquer que le rendu doit se mettre à jour
    // - peut prendre un paramétre qui sera la valeur initiale de votre variable
    const [count, setCount] = useState(0);
    const [firstname, setFirstname] = useState('Roger');

    const increment = () => {
        setCount((prev) => prev + 1);
    };
    const decrement = () => {
        setCount((prev) => prev - 1);
    };

    const crement = (value) =>{
         setCount((prev) => prev + value);
    }
    return (
        <div>
            <h2 className="h2">La gestion du state :</h2>
            <div className="flex flex-row justify-center items-center gap-3">
                <button onClick={ ()=> crement(-1)} >➖</button>
                <p>{count}</p>
                <button onClick={ ()=> crement(1)}>➕</button>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
                <h3 > Bienvenue {firstname} 💖🌞🫰</h3>
                <button onClick={ () => setFirstname( prev => prev.toLowerCase())} >🗣️🔊</button>
                <button  onClick={ () => setFirstname( prev => prev.toUpperCase())} >🗣️🔊</button>
                <button  onClick={ () => setFirstname( 'Rogerina')} >⭐🪄👩‍🦰</button>
                <button  onClick={ () => setFirstname( 'Roger')} >🔂</button>
            </div>
        </div>
    )
}