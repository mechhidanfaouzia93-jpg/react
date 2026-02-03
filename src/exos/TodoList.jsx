import style from './todo.module.css'

export const TodoList = (props) => {
    const { todo, onFinish, onDelete } = props;
    const { id, nom, description, priorite, completion } = todo;

    return (
        <div className="form">
            <div className={style.paraph}>
                <p>
                    <strong>{nom}</strong>
                </p>
                <p>
                    {priorite === "urgente" && (
                        <span className={style.red}>(Urgent)</span>
                    )}
                </p>

                <p>{description}</p>
            </div>
            <div>
                <button onClick={() => onFinish(id)} disabled={completion} className={style.button}>
                    Terminer
                </button>
                <button onClick={() => onDelete(id)} className={style.button}>Supprimer</button>
            </div>
        </div>
    );
};
