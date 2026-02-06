
import { useState } from "react";
import { Compteur } from "./compteur";




export const ProjetTricot = () => {

    const [compteur1, setCompteur1] = useState(true);

    const [compteur2, setCompteur2] = useState(true);


    return (
        <div className="flex flex-col justify-center items-center ">
            <h2 className="h2">Mon projet Tricot</h2>

            <div className="card">
                <div className="flex flex-row gap-3">
                    {/* <p>Mailles : </p> */}
                    {compteur1 && <Compteur name="Mailles" />}
                </div>
                
            </div>
            <div>
                    <button className="button" onClick={() => setCompteur1(!compteur1)}>
                        {compteur1 ? 'Hide' : 'Show'}
                    </button>
                </div>
            <div className="card">
                {/* <p>Rangs : </p> */}
                {compteur2 && <Compteur name="Rangs" />}

            
            </div>
                <button className="button" onClick={() => setCompteur2(!compteur2)}>
                    {compteur2 ? 'Hide' : 'Show'}
                </button>
        </div>
    )
}

// const [compteurs, setCompteurs] = useState([
// {
//     id: 1,
//     name: 'Mailles',
//     isVisible : true
// }
//{
//id : 2, name : rangs, isVisisble: true}])