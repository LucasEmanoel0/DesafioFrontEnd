// ComparisonResult.js
import React from 'react';
import '../styles/card.css'

function Compari({ comparison }) {
  return (
    comparison ? <div className="comparison">
      <pre>{comparison}</pre>
    </div> : null
  );
}

export default Compari;
