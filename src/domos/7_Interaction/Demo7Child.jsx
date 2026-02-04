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



// export const todoList = (props) =>{
//      const {todo, onfinish, onDelete} = props;
//      const { id, nom, description, priorité, completion } = todo;

//      return (
//         <div>
//           <form onSubmit={handleSubmit(onSubmit)}>
//                 <h2>Ajouter une nouvelle tâche</h2>
//                 <div>
//                     <label>Nom : </label>
//                     <input type="text" {...register( "nom", {required : "Le nom est requis"}) }/>
//                       {
//                 //type de l'errors
//                 errors['nom']?.type === "required" &&
//                 <span>Ce champs est requis</span>
//             }
//                 </div>
//                 <div>
//                     <label>Description : </label>
//                     <textarea {...register('description')} />
//                 </div>
//                 <div>
//                     <label>Priorité :</label>
//                     <select {...register('priorite')}>
//                         <option value="basse">Basse</option>
//                         <option value="normale">Normal</option>
//                         <option value="urgente">Urgente</option>
//                     </select>
                   
//                 </div>
//                  <button >Ajouter</button>
                
//             </form>

//             <div>
//                 <h2>Liste des tâches</h2>

//             </div>
//            </div>
//      )
// }






// import { useState } from "react";
// import { useForm } from "react-hook-form";

// export const todoForm = () => {

//     const [todos, setTodos ] = useState([]);

//     const { register, handleSubmit, formState: { errors }, reset } = useForm({
//         defaultValues: {
            
//             nom: '',
//             description: '',
//             priorite: 'normale'
//         }
//     });

// const onSubmit = (data)=>{
//    data.preventDefault();
    
// }

// const addTodo =(todo)=>{
//     setTodos([ ...todos,{...todos, completion: false}])
// }

// const finichTodo = (id) =>{
//     setTodos(todos.map(todo=> todo.id===id ? {...todo, completion: true}))
// }

// const deleteTodo = (id)=>{
//     setTodos(todos.filter(todo=>todo.id !== id))
// }
//     return (
//         <div>
//             <div>
//                <p>{nom}</p>
//                <p>{priorité=== 'urgente' ? className={style.red}: className={style.noir}}</p>
//                <p>{description} </p>
//            </div>
//                <div>
//                <button onClick={()=> onFinish(id)} disabled={completion}>Terminer</button>
//                <button onClick={onDelete}>Supprimer</button>
//                </div>
         
//         </div>
       

//     )
// }