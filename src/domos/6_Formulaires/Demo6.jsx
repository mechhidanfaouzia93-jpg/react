import { useState } from "react";

export const Demo6 = () => {

    // pour gerer les formulaires nativement en react avec le state 

    const [ bill, setBill ] = useState (0);
    const [ nbPerson, setNbPerson ] = useState (0);
    const [ tips, setTips ] = useState (5);
    // pour la validation du formulaire 
    const [ isValid, setIsValid] = useState (true);/* booléen qu'on va modifier  */

    const [ totalPerPerson, setTotalPerPerson ] = useState (0);
    //gestion du submit du formulaire
    const handleSubmit = (event)=>{
        //event contiendra l'evenet qui vient d'être déclenché, c-a-d notre submit 
        event.preventDefault(); //
        setTotalPerPerson(undefined) /*empêche le rechargement de la page */
        if(bill>0 && nbPerson >0){
            setTotalPerPerson((bill + (bill * tips / 100)) / nbPerson);
            setIsValid(true);
        }else{
            setIsValid(false); /* on met a false si les conditions ne sont pas remplies */
        }
    }

    return (
        <div className="flex flex-col items-center gap-3 mt-4 border-2 border-black p-4 rounded-lg w-1/3 mx-auto">
            <h2>Split'O Resto</h2>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center "> 
            <label htmlFor="bill">Total de la note : </label>
            {/* si on fait target on recupere la valeur de l'input */}
            <input id="bill" type="number" value={bill} onChange={ (event) =>{ setBill(event.target.valueAsNumber)}}  />
        </div>

        <div className="flex flex-row justify-center "> 
            <label htmlFor="nbPerson">Nombre de personne :</label>
            <input id="nbPerson" type="number" value={nbPerson} onChange={ (event) =>{ setNbPerson(event.target.valueAsNumber)}} />
        </div>
        <div className="flex flex-row justify-center "> 
            <label htmlFor="tips">Pourboire :</label>
            <select  id="tips" value={tips} onChange={ (event) =>{ setTips(event.target.value)}}>
                <option value={0}>Aucun</option>
                <option value={5}>5%</option>
                <option value={10} >10%</option>
                <option value={15}>15%</option>
            </select>
        </div>
        <button>Spliter💵💴🤑</button>

        {
            !isValid && <span>⚠️ Vous devez mettre une note et un nombre de personnes positif</span>
        }

        </form>
        { totalPerPerson &&
        <div>Vous devez payer : { totalPerPerson.toFixed(2)} €</div>}
        </div>
    )
}