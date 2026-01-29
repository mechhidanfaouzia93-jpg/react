import style from './TrainerCard.module.css'

export const TrainerCard = (props) => {
    const { trainer } = props;

    const { id, firstname, lastname, gender, vacations, hobbies } = trainer;

    return (
        <div className= {`${style.card}
        ${ gender === 'm'?
            style.male :
            gender === 'f' ?
            style.female :
            style.other }`
        }>
            <h3>{firstname} {lastname}</h3>

        <div className={style.hobbies}>
            <p>Ses hobbies sont :</p>

            <ul>
                { hobbies.map( (hobby, index) => (<li key={index}> {hobby} </li>))}
            </ul>
        </div>
            { vacations ?
                <button disabled> En vacances </button>
                :
                <button> Sélectionner</button>}

        </div>
    )
}