import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        backgroundColor: "pink",
        padding: "10px",
      }}>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/characters">Characters</Link>
    </div>
  );
}
