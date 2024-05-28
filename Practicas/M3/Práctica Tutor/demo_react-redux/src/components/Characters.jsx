import React from "react";
import { useSelector } from "react-redux";

export default function Characters() {
  const characters = useSelector((state) => state.characters);

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
