import { useEffect, useState } from "react";

import style from './compteur.module.css'


export const Compteur = (props)=>{
    const { name} = props;

    const [count, setCount] = useState(0);

    useEffect(() =>{
        const savedValue = localStorage.getItem(name);

        if(savedValue !== null){
            setCount(+savedValue);
        }
    }, [name]);

    useEffect(()=>{
        localStorage.setItem(name, count);
    }, [name, count])
    

    return (
        <div >
             
                
                    <p>{name} :</p>

                    <div className="flex flex-row justify-center items-center gap-3">
                    <button  className="button" onClick={()=>{ if (count>0){
                        setCount(count - 1)
                    }}}>-</button>
                        <p>{count}</p>
                    <button className="button"  onClick={()=>setCount(Math.max(0,count +1))}>+</button>
                </div>
            </div>
    )
}