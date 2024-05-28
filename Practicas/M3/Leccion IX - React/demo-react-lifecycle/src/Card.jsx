const Card = ({ character, handleOnClick }) => {

    const {name, house, id} = character

    return(
        <div>
            <h2>{name}</h2>
            <h3>{house}</h3>
            <button onClick={()=>handleOnClick(id)}>Ver detalles</button>
        </div>
    )
}

export default Card;