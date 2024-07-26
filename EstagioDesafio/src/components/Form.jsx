// SearchBar.js
import React from 'react';
import '../styles/card.css'

function Form({ search, setSearch, searchPerson }) {
  return (
    <form onSubmit={(event) => searchPerson(event, search)}>
      <input
        className="input"
        id="search"
        type="text"
        value={search}
        placeholder="Pesquisar heróis"
        onChange={(ev) => setSearch(ev.target.value)}
      />
    </form>
  );
}

export default Form;
