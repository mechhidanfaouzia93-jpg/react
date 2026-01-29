import { useState } from "react"
import { useForm } from "react-hook-form";

export const Demo6Lib = ( ) =>{

    const [ totalPerPerson, setTotalPerPerson ] = useState();
    // register -> c'est ce que l'on va utiliser pour enregistrer les champs du formulaire
    //il fait le value={state } + onChange ={ fonctionPourChangerLeState}pour nous en gros.
    // handleSubmit -> c'est la fonction qui fait le preventDefault et qui vous renvoie le state qu'elle a fabriqué
    // formState -> c'est l'état du formulaire (erreurs, etc)
    // de FormState on va récuperer errors qui contient toutes les erreurs actuelles du formulaire
    const { register, handleSubmit, formState : { errors }, reset } = useForm( {
                                                                                                                mode : 'onChange',
                                                                                                                defaultValues :  {
                                                                                                                                            bill : 0, 
                                                                                                                                            nbPerson : 0,
                                                                                                                                            tips : 5
                                                                                                                 }});

    const splitBill = (data) =>{
        
        // data -> c'est l'objet qui contient les valeurs des champs du formulaire
        // par useForm grâce à register
        console.log(data);
        setTotalPerPerson(data.bill + (data.bill * data.tips / 100) / data.nbPerson);
        reset();
    }

    return (
        <div className="flex flex-col items-center gap-3 mt-4 border-2 border-black p-4 rounded-lg w-1/3 mx-auto">

            <h2>Split'O Resto</h2>

        <form onSubmit={handleSubmit(splitBill, ()=>{setTotalPerPerson(undefined)})}  >

        <div className="flex flex-row justify-center "> 

            <label htmlFor="bill">Total de la note : </label>
            {/* si on fait target on recupere la valeur de l'input */}
            <input id="bill" type="number"  name="bill" {...register("bill", { valueAsNumber: true, required: true, min: 10})} />

            {
                //type de l'errors
                errors['bill']?.type === "required" &&
                <span>Ce champs est requis</span>
            }
            {
                  errors['bill']?.type === "min" &&
                <span>Vous devez mettre une valeur minimum 10€</span>
            }

        </div>

        <div className="flex flex-row justify-center "> 

            <label htmlFor="nbPerson">Nombre de personne :</label>
            <input id="nbPerson" type="number" name="nbPerson" {...register("nbPerson", { valueAsNumber: true, required: true, min: 1})} />
            {
                errors['nbPerson']?.type === "required" &&
                <span>Ce champs est requis</span>
            }
            {
                  errors['nbPerson']?.type === "min" &&
                <span>Vous devez mettre au moins une personne</span>    
            }

        </div>

        <div className="flex flex-row justify-center "> 

            <label htmlFor="tips">Pourboire :</label>

            <select  id="tips" name="tips" {...register("tips", { valueAsNumber: true, required: true})} >
                <option value={0}>Aucun</option>
                <option value={5}>5%</option>
                <option value={10} >10%</option>
                <option value={15}>15%</option>
            </select>
        </div>
        <button>Spliter💵💴🤑</button>

      
        </form>
        { totalPerPerson &&
        <div>Vous devez payer : { totalPerPerson.toFixed(2)} €</div>}
        </div>
    )
};
