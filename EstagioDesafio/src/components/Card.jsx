// HeroCard.js
import React from 'react';
import '../styles/card.css'
import '../styles/img.css'

function Card({ human, selectPersons, isSelected }) {
  return (
    <div
      className={`person ${isSelected ? 'selected' : ''}`}
      onClick={() => selectPersons(human)}
    >
      <img className="imagens" src={human.images.xs} alt={human.name} />
      <div className="info">
        <h2>{human.name}</h2>
        <h4 className="infoPower">Total Power: {human.powerstats.power}</h4>
      </div>
    </div>
  );
}

export default Card;
