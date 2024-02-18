import React, { useState } from "react";

export default function Quiz() {
  const [ans, setAns] = useState(true);
  const [timer, setTimer] = useState(30);
  return (
    <>
      <div className="container">
        <h1>Quiz App</h1>
        <h2 className="quiestion">Css Full Name..?</h2>
        <div className="ans">
          <button> 1.Cascating Style Seet</button>
          <button>2. Cascating Style Seet</button>
          <button>3.Cascating Style Seet</button>
          <button>4.Cascating Style Seet</button>
        </div>

        <button className="btn1">Prev</button>
        <button className="btn1">Next</button>
      </div>
    </>
  );
}
