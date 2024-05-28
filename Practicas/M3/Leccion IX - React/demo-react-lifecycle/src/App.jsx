
import './App.css'
import { useState, useEffect } from 'react'
import Card from './Card'
import Detail from './Details';

function App() {
  const [characters, setCharacters] = useState([]);
  const [detail, setDetail] = useState(false);
  const [id, setId] = useState(0);
  const [selectedHouse, setSelectedHouse] = useState("");
  const [filteredCharacters, setFilterCharacters] = useState([]);

  const handleOnClick = (id) => {
    setId(id);
    setDetail(true);
  }

  const handleOnClose = () => {
    setDetail(false)
  }

  const handleHouseClick = (house) => {
    setSelectedHouse(house);
  }

  const handleReset = () => {
    setSelectedHouse("");
  }
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => setCharacters(data))

  return () => { setId(0) }
  }, []);

  useEffect(() => {
    if(selectedHouse !== ""){
      const filtered = characters.filter(character => character.house === selectedHouse);
      setFilterCharacters(filtered)
    } else {
      setFilterCharacters(characters)
    }
  })

  return (
    <>
        <h2>Casa seleccionada: {selectedHouse}</h2>
        <button onClick={handleReset}>Reestablecer</button>
      {
        filteredCharacters.map((character) => {
          return <Card key={character.id} character={character} handleOnClick={handleOnClick}/>
        })
      }
      {detail && <Detail id={id} handleOnClose={handleOnClose} handleHouseClick={handleHouseClick}/>}
      <div>
      </div>
    </>
  )
}

export default App
