import './Demo1.css'

import  style from './Demo1.module.css'
export const Demo1Component = (props) => {

    const { name = '[cours]', type= '[Domaine]' , difficulty= '[X] ' } = props
    return (
        <>
       <p> Bienvenue au cours de {name} qui est de {type} </p>
       <p className= {style ['grey-text']}> Difficulté : {difficulty} /5</p>
        </>
    );
}