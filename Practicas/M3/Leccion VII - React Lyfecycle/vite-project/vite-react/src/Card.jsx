

const Card  = ({character: { name, house } }) => {

 
    return (
    <div>
        <h2>{name}:</h2>
        <h3>{house}</h3>
    </div>
    )
}

export default Card;