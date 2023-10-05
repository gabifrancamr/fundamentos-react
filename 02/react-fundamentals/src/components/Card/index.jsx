/* eslint-disable react/prop-types */
import styles from './Card.module.css'

export default function Card({img, title, description}) {
    
    return(
        <div className={styles.card}>
            <img src={img} alt="foto do poster de star wars" />
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <button>Comprar agora</button>
            </div>
        </div>
    )
}