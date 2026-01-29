import style from './Demo2.module.css'

export const Demo2 = (props) => {

    const { owner, havePet, name, image, type } = props;

    if (!havePet) {
        return (

            <div className={style.nopet}>
                <p >Oh non {owner}! Vous ne posssédez pas d'animal? </p>
                <a href="https://www.veeweyde.be/nos-chats/">Cliquez ici pour en adopter un!</a>
            </div>

        )
    }
    return (
        <div className={style.pet + ' ' + 
            ((type === 'chat')? style.cat : style.dog) } >

            <p> Ohlala {owner} ! Dis-m'en plus sur ton animal</p>

            <p> Votre animal est un
                {(type === 'chat') ?
                    (<span>🐈‍⬛</span>) :
                    (<span>🐈</span>)}
            </p>
            {/* on peut l'ecrire en 2 façons */}
            {/* <p> Son petit nom est : <span>{ name?name : 'Inconnu'}</span></p> */}
             <p> Son petit nom est : <span>{ name || 'Inconnu'}</span></p>
             { image && <img width='150px' src={image} />}


        </div>
    )
}