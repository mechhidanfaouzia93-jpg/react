import { useState } from "react";
import { useForm } from "react-hook-form";
import { TodoList } from "./TodoList.jsx";
import style from './todo.module.css'

export const TodoForm = () => {

  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(1);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      nom: "",
      description: "",
      priorite: "normale",
    },
  });
  // const filterToDo = ()=>{
  //   if(filter==='high'){
  //     return todos.filter(todo=>)
  //   }
  //   else if (filter ===''){
      
  //   }
  // }

  const onSubmit = (data) => {
    

    setTodos([...todos, {
      id: counter,
      ...data,
      completion: false,
    },
    ]);
    setCounter(prev => prev + 1);
    reset();
  };

  const finishTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completion: true } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  return (
    <div className="container">

      <form onSubmit={handleSubmit(onSubmit)} >
        <h2 className="h4">Ajouter une nouvelle tâche</h2>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input id="nom"{...register("nom", { required: true })} />
          {errors.nom && <span>Champ requis</span>}
        </div>
        <div> <label htmlFor="description">Description :</label>
          <textarea id="description" {...register("description")} />
        </div>
        <div>
          <label htmlFor="priorite">Priorité :</label>
          <select {...register("priorite")}>
            <option value="basse">Basse</option>
            <option value="normale">Normale</option>
            <option value="urgente">Urgente</option>
          </select>
        </div>
        <button type="submit" className={style.button}>Ajouter</button>
      </form>

      <div className={style.list}>
        <h2>Liste des tâches</h2>

        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            onFinish={finishTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
      {/* {
        filterToDo().map
      } */}
    </div>
  );
};
