import { FilmCard }  from "./FilmCard";

export const FilmsEx = () => {

    const films = [
        {
            id: 1,
            titre: 'Avatar : de feu et de cendres',
            realisateur: 'James Cameron',
            annee: 2025,
            affiche : 'https://fr.web.img5.acsta.net/c_310_420/img/52/fb/52fb8f0345af2b0940557aa049ca19fd.jpg',
            notation: 4
        },
        {
            id: 2,
            titre: 'L’Affaire Bojarski',
            realisateur: 'Jean-Paul Salomé',
            annee: 2026,
            affiche : 'https://fr.web.img6.acsta.net/c_310_420/img/18/05/18059e8dd9bca2e516d41023cc08d9d1.jpg',
            notation: 4
        },
        {
            id: 3,
            titre: 'Le Mage du Kremlin',
            realisateur: 'Olivier Assayas',
            annee: 2026,
            affiche : 'https://fr.web.img6.acsta.net/c_310_420/img/27/26/27264fbe0076f4db99b28acfa0e21ac5.jpg',
            notation: 3
        },
        {
            id: 4,
            titre: 'La Femme de ménage',
            realisateur: 'Sydney Sweeney, Amanda Seyfried, Brandon Sklenar',
            annee: 2025,
            affiche : 'https://m.media-amazon.com/images/I/71BjR0eQ3CL._AC_SL1500_.jpg',
            notation: 3
        }
    ];
    return (
    <div>
        <h2 className="h2">Liste des films</h2>
        <div className="flex flex-row flex-wrap" >
            { films.map(film => ( <FilmCard key= {film.id} film={film} />))}

        </div>
    </div>
)
};

