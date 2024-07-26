// Header.js
import React from 'react';
import '../styles/header.css'
import '../styles/button.css'
import Form from '../components/Form';


function Header({ search, setSearch, searchPerson, showComparison }) {
  return (
    <header className="header">
      <h2 className="heroes">Heroes</h2>
      <Form search={search} setSearch={setSearch} searchPerson={searchPerson} />
      <button onClick={showComparison} className='button'>Comparar Selecionados</button>
    </header>
  );
}

export default Header;
