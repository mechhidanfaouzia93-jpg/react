import { TrainerCard } from "./trainerCard";


export const Demo3 = () => {

    const trainers = [
        { 
            id : 1, 
            firstname : 'Aude',
            lastname : 'Beurivé',
            gender : 'f',
            vacations : false,
            hobbies : [ 'Dessin', 'Tricot', 'Soup' ]
        },
        { 
            id : 2,
            firstname : 'Aurélien',
            lastname : 'Strimelle',
            gender : 'm',
            vacations : false,
            hobbies : [ 'Randonnée', 'Jeux de société']
        },
        { 
            id : 3,
            firstname : 'Quentin',
            lastname : 'Geerts',
            gender : 'm',
            vacations : true,
            hobbies : [ 'Mangas', 'Jeux Vidéos' ]
        }
    ];



    return (
        <div>
            <h2>Liste des formateurs</h2>
            <div className="flex flex-row justify-center items-center">

                {/* {trainers.map( trainer =>(<p key= {trainer.id}>{trainer.firstname}</p>))} */}

                {trainers.map( trainer => (<TrainerCard key={trainer.id} trainer={trainer} />) )}

            </div>
        </div>
    )
}