import { useState } from "react";

export const Demo6Bis =() =>{

   
    const [ splitForm, setSplitForm ] =  useState ({
        bill: 0,
        nbPerson: 0,
        tips: 5
    });
    const [isValid, setIsValid ] = useState (true);
    const [ totalPerPerson, setTotalPerPerson ] = useState ();

    const handleField = (event) =>{

        const name = event.target.name;
        console.log(event.target.name);

        const type = event.target.type;
        console.log(event.target.type);

        setSplitForm(prev =>{
            const newSplitForm = {
                 ...prev,
                // on récupere tout ce qui se trouve déja dansprev, c-a-d, dans splitForm
                [name]: (type === 'checkbox')?
                 event.target.checked : 
                 ( type==='number' )?
                  event.target.valueAsNumber : 
                  event.target.value
               
            }
            return newSplitForm;
        })
    }
        
            // pour gerer les formulaires nativement en react avec le state 
        const handleSubmit = (event) => {
            event.preventDefault();
            setTotalPerPerson(undefined) /*empêche le rechargement de la page */
        if(splitForm.bill>0 && splitForm.nbPerson >0){
            setTotalPerPerson((splitForm.bill + (splitForm.bill * splitForm.tips / 100)) / splitForm.nbPerson);
            setIsValid(true);
        }else{
            setIsValid(false); /* on met a false si les conditions ne sont pas remplies */
        }
        }
         
        
            return (

                <div className="flex flex-col items-center gap-3 mt-4 border-2 border-black p-4 rounded-lg w-1/3 mx-auto">

                    <h2>Split'O Resto</h2>

                <form onSubmit={handleSubmit}>
             {/* on ajoute le name pour savoir l'utiliser  */}
                <div className="flex flex-row justify-center "> 
                    <label htmlFor="bill" value={splitForm.bill}>Total de la note : </label>
                 
                    <input id="bill" name="bill" type="number" value={splitForm.bill}  onChange={handleField} />
                </div>
        
                <div className="flex flex-row justify-center "> 
                    <label htmlFor="nbPerson" value={splitForm.nbPerson}>Nombre de personne :</label>
                    <input id="nbPerson" name="nbPerson" type="number" value={splitForm.nbPerson} onChange={handleField} />
                </div>
                <div className="flex flex-row justify-center "> 
                    <label htmlFor="tips" >Pourboire :</label>
                    <select  id="tips" name="tips" value={splitForm.tips} onChange={handleField}>
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
    
