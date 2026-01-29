
import style from './ex_Component.css'
export const ExComponent = (props) => {

    const { name, âge = 18 } = props;
    return (
        <>
            <p className={style['paraphOne']}> Bienvenue {name} sur l'application React</p>


        </>
    )
}

