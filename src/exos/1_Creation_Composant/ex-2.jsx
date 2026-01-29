import style from './ex-2.module.css'

export const Exercice2 = (props) => {

    const { isAvailable, name, image, description, price, promoPrice } = props;
    if (!isAvailable) {
        return (
            <div>
            <div className={style.card}>
          
                <p >Name : {name}</p>

                <p> {name} est plus en vente </p>
                {image && <img width='200px' src={image} alt={name} />}

            </div>
            </div>

        )
    }
    return (
        <div className={style.divCard}>
            <div className={style.card}>
                  {image && <img width='200px' src={image} alt={name} />}
                <p>Name : {name}</p>
                <p> Description : {description || 'pas description'}</p>

             
                <p>{price}</p>
                <p className={ promoPrice && style.promo+ ' ' + style.unvailable}  > {promoPrice} €</p>

            </div>

        </div>

    )


}