import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
  let styleClass = "star-rating-blank";
  if (rating && rating >= starId) {
    styleClass = "star-rating-filled";
  }

  return (
    <div
      className="star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg
        height="55px"
        width="53px"
        className={styleClass}
        viewBox="0 0 25 23"
        data-rating="1"
      >
        <polygon
          stroke-width="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

function App() {
  const [rating, setRating] = useState(0);
  const [hoverState, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <div className="App-header">
        <h1>Amazon Star Rating</h1>
        <Logo />
        <div className="logo"></div>
      </div>
      <div className="flex-container">
        {stars.map((star, i) => (
          <Star
            key={i}
            starId={i}
            rating={hoverState || rating}
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
