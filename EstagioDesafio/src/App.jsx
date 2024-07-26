// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { selectPersons, searchPerson, showComparison } from './functions/functions';
import Header from './pages/Header';
import Card from './components/Card';
import Compari from './components/Compari'
import './styles/card.css'

function App() {
  const [dadoshumans, setHumans] = useState([]);
  const [allHumans, setAllHumans] = useState([]);
  const [selectedHumans, setSelectedHumans] = useState([]);
  const [search, setSearch] = useState("");
  const [comparison, setComparison] = useState(null);

  // Fetch dos dados dos personagens
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('https://homologacao3.azapfy.com.br/api/ps/metahumans');
        setHumans(response.data);
        setAllHumans(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  // Atualiza o estado de comparação
  const handleShowComparison = () => {
    const comparisonResult = showComparison(selectedHumans);
    setComparison(comparisonResult);
  };

  return (
    <>
      <Header 
        search={search} 
        setSearch={setSearch} 
        searchPerson={(event) => searchPerson(event, search, allHumans, setHumans)} 
        showComparison={handleShowComparison} 
      />

      <div className="container">
        {dadoshumans.map((human, index) => (
          <Card
            key={index}
            human={human}
            selectPersons={(human) => selectPersons(human, selectedHumans, setSelectedHumans)}
            isSelected={selectedHumans.some(selected => selected.id === human.id)}
          />
        ))}
      </div>
      <Compari comparison={comparison} />
    </>
  );
}

export default App;
