import { useState } from "react"
import style from './exo-4.module.css'

export const Burger = () => {

    const menu = [
        { id: 1, name: 'Burger Cheese', price: 8.50 },
        { id: 2, name: 'Burger Chicken', price: 11 },
        { id: 3, name: 'Burger Triple', price: 12.50 },
        { id: 4, name: 'Petite Frite', price: 3.50 },
        { id: 5, name: 'Moyenne Frite', price: 4.50 },
        { id: 6, name: 'Grande Frite', price: 6 },
    ];

    const [quantites, setQuantites] = useState([0, 0, 0, 0, 0, 0]);

    const [total, setTotal] = useState(0);

    // solution Aude
    // // pour chaque produit je renvoie que produit.id 

    // // const changeQuantity = (index, value) => {
    //             const newProduits = products.map(product => {
    //                 // pour chaque produit , on regarde si l'id est égal à celui reçu en paramètre dont on veut modifier la quantité

    //                 // 

    //                 if( product.id === id){
    //                     // on va vérifier la quantité pour ne pas descendre en dessous de 0
    //                     if( product.quantity + value >= 0){
    //                     /*si les id correspondent , on modifie la quantité et on revoie le produit modifié*/
    //                     product.quantity += value
    //                 return product;
    //                     }
    //                 }
    //                 else{
    //                     return product; /*si les id ne correspondent pas on renvoie le produit inchangé*/
    //                 }
    //             })

    const crement = (index, value) => {
        setQuantites((prev) => {
            const newQuantites = [...prev];
            newQuantites[index] += value;

            const newTotal = menu.reduce((sum, product, indice) => sum + (product.price * newQuantites[indice]), 0)
            setTotal(newTotal)
            
            return newQuantites;
        });

        


    };
    // const total = menu.reduce((sum, product) =>  sum + product.price, 0);




    return (
        <div className={style.card + ' ' + "flex flex-col justify-center items-center gap-3"}>

            <h2 className="h2" > Burger Resto 🍔</h2>
            
            <div className="flex flex-col justify-center items-center gap-3">
                {menu.map((product, indice) => (
                    <div className="flex flex-row gap-3" key={product.id}>

                        <p>{product.name} <span> : {product.price} €</span></p>

                        <button disabled={ product.quantites === 0} onClick={() => crement(indice, -1)} >➖</button>
                        <p>{quantites[indice]}</p>
                        <button onClick={() => crement(indice, 1)}>➕</button>
                    </div>


                ))}
            </div>
            {/* Points clés
reduce() : C'est la méthode recommandée pour calculer une somme, car elle parcourt le tableau une seule fois et accumule une valeur.
Initialisation : Toujours fournir une valeur initiale (le 0 à la fin de reduce(..., 0)) pour éviter des erreurs, surtout si le tableau est vide.
Affichage : Le résultat du calcul (total) est placé entre accolades {} dans le JSX pour être rendu.  */}

            <p className={style.total}>Total : {total.toFixed(2)} €</p>


        </div>

    )
};



// const [products, setProducts ] = useState( [ 
//     { id: 1, name: 'Burger Cheese', price: 8.50 },
//     { id: 2, name: 'Burger Chicken', price: 11 },
//     { id: 3, name: 'Burger Triple', price: 12.50 },
//     { id: 4, name: 'Petite Frite', price: 3.50 },
//     { id: 5, name: 'Moyenne Frite', price: 4.50 },
//     { id: 6, name: 'Grande Frite', price: 6 },  
// ]);