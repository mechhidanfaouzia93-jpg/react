import { useState } from "react";

export const ExoFormulaire = () => {

    // const { register, handleSubmit, formState : { errors }} = useForm( {
    defaultValues :  {
                          //     nbs1 : '',
                          //    nbs2 : '',
                            //    operation : '+'
                                                                                //  }});

    const [ nbs1, setNbs1 ] = useState('');
    const [ nbs2, setNbs2 ] = useState('');
    const [ operation, setOperation ] = useState('+');
    const [ result, setResult ] = useState('');

    const [isValid, setIsValid ] = useState(true);

    const calculate = (event) => {
        event.preventDefault();

  if( nbs1 === '' || nbs2 === ''){
     {
            !isValid && <span>⚠️ Vous devez entrer un nombre de type number</span>
        }
  }
      let res = 0;
        switch(operation) {
            case '+':
                res = nbs1 + nbs2;
                break;
            case '-':
                res = nbs1 - nbs2;
                break;
            case '*':
                res = nbs1 * nbs2;
                break;
            case '/':
                res = nbs1 / nbs2;
                if(nbs2 === 0){
                    setIsValid(false);
                    return;
                }
                break;
                default:
                    res = 0;
        }
        setResult(res);
          };
//RegEx (pattern : /-?\\d+(\\.\\d+)?/ ) pour n'accepter que les nombres (entiers et décimaux) et le signe moins pour les négatifs
    return (
        <div className="flex flex-row justify-center items-center gap-3 margin-3 card border border-radius">
            <h2>Formulaire</h2>
            <form className="margin-1"  onSubmit={calculate}>
                <div >
                    <label className="label">Nbs :</label>
                    <input type="number" value={nbs1} onChange={(event) =>{
                        setNbs1(event.target.valueAsNumber)
                    } } />
                </div>
                <div className="padding-1">
                    <label className="label">Operation :</label>
                    <select value={operation} onChange={(event)=>{
                        setOperation(event.target.value)}}>

                        <option>+</option>
                        <option>-</option>
                        <option>*</option>
                        <option>/</option>

                    </select>

                </div>

                <div className="padding-1">

                    <label className="label">Nbs :</label>
                    <input type="number" value={nbs2} onChange={(event)=>{setNbs2(event.target.valueAsNumber)}}/>

                </div>

                <button className="button">Calculer</button>
                        <div className="padding-1" >
                <input type="number" value={result} readOnly />
                </div>
            </form>
        </div>
    )
}
}