import "./Detail.css"
import { useState, useEffect } from "react";

const Detail = ({ id, handleOnClose, handleHouseClick }) => {
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://hp-api.onrender.com/api/character/${id}`)
        .then (response => response.json())
        .then ((data) => setCharacter(data[0]))
    }, [id]);
    
    return(
        <div className="modalDetail">
            <h2>{character?.name}</h2>
            <button onClick={() => handleHouseClick(character.house)}>{character?.house}</button>
            <br/>
            <img src={character?.image} alt={character?.name}/>
            <br/>
            <button className="ButtonDetail" onClick={handleOnClose}>Cerrar</button>
        </div>
    )
}

export default Detail;