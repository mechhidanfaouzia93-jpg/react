import style from './Demo7.module.css'

export const Demo7Child = (props)=>{

    // onAdoptReveal -> montant => on a reçu cette fonction 
    const {child, onAdoptReveal} = props;
    const {id, name, skin, adopted } = child;

    return(
        <div className={style.enfant}>
            <h3>{skin} : je suis {name}</h3>
            {adopted ?
            <span>Je suis adopté</span> : 
            // on declanche l'événement onAdoptReveal en envoyant l'id de l'enfant sur lequel on a cliqué (on peut )
            <button onClick={() => {onAdoptReveal(id)}}>Annoncer que je suis adopté.</button>}
        </div>
    )
}