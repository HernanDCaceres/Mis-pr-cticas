import styles from './Card.module.css'

const Card  = () => {
    return (
    <div className={styles.container}>
        <h1>Tarjeta</h1>
        <h3>Nombre: Hernan</h3>
        <p>Email: email@example.com</p>
    </div>
    )
}

export default Card;