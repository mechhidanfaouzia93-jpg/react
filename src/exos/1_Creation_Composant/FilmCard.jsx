
import style from './FilmCard.module.css';

const getNotationDisplay = (notation) => {
  const hearts = '💖'.repeat(notation);
  return `${hearts} / 5`;
};


export const FilmCard = (props)=>{
    const { film} = props;

    

    const { id, titre, realisateur, annee, affiche, notation} = film;
    // const hearts = '💖'.repeat(Math.floor( notation ));
    const hearts = [ 1, 2, 3, 4, 5];

    return (
        <div className={style.card}>
            {affiche && <img className={style.poster} width='200px' src={affiche} alt={titre} />}

            <h3 className={style.title}>{ titre }</h3>
            <p className={style.realisator}> Réalisé par { realisateur }</p>
            <p className={style.year}> Année : { annee }</p>
            <p className={style.heart}> Notation : { getNotationDisplay(notation) } </p>
            <div> {
                Array.from({ length: 5 }, (value, index) => (
                    <span key={index}>
                        {index < notation ? '💖' : '🧹'}
                    </span>
                ))
}</div>

       {/* <p>
        Notation : {hearts.map(num=>
            {<p key={num}>{num <= notation ? '💖' : '🧹'} /</p> /5})}

       </p> */}
            {/* <p> Notation : { (notation===1)? '💖' : (notation === 2)? '💖💖': notation === 3?
            '💖💖💖': (notation === 4)? '💖💖💖💖': notation === 5? '💖💖💖💖💖' } / 5 </p> */}

        </div>
    )
}