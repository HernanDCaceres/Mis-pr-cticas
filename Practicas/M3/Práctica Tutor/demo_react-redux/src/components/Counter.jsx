import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter } from "../redux/actions";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch({ type: "INCREMENTAR" });
  }
  function handleSearch() {
    fetch(`https://rickandmortyapi.com/api/character/${count}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(addCharacter(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div>
      <h2>Contador:</h2>
      <p>{count}</p>
      <button onClick={handleClick}>incrementar</button>
      <button onClick={handleSearch}>Buscar character {count}</button>
    </div>
  );
}
