// functions.js

// Função para selecionar personagens
export function selectPersons(human, selectedHumans, setSelectedHumans) {
    setSelectedHumans(prevSelected => {
      if (prevSelected.some(selected => selected.id === human.id)) {
        return prevSelected.filter(selected => selected.id !== human.id);
      } else {
        if (prevSelected.length < 2) {
          return [...prevSelected, human];
        } else {
          return [human, prevSelected[1]]; // Substitui o personagem mais antigo
        }
      }
    });
  }
  
  // Função para comparar atributos
  export function getComparison(selectedHumans) {
    if (selectedHumans.length === 2) {
      const [hero1, hero2] = selectedHumans;
  
      // Comparar um ou mais atributos
      const compareAttribute = (attr) => {
        const value1 = hero1.powerstats[attr] || 0;
        const value2 = hero2.powerstats[attr] || 0;
  
        if (value1 > value2) {
          return hero1;
        } else if (value2 > value1) {
          return hero2;
        } else {
          return null; 
        }
      };
  
      const attributes = ['power', 'speed', 'intelligence']; 
      let winner = null;
      let result = `Comparação:\n`;
  
      attributes.forEach(attr => {
        const currentWinner = compareAttribute(attr);
        if (currentWinner) {
          result += `${attr.charAt(0).toUpperCase() + attr.slice(1)} - ${currentWinner.name}\n`;
          winner = currentWinner;
        } else {
          result += `${attr.charAt(0).toUpperCase() + attr.slice(1)} - Empate\n`;
        }
      });
  
      result += `\nVencedor Geral: ${winner ? winner.name : 'Nenhum Vencedor'}`;
  
      return result;
    }
    return null;
  }
  
  // Função para exibir o resultado da comparação
  export function showComparison(selectedHumans) {
    const comparison = getComparison(selectedHumans);
    if (comparison) {
      alert(comparison);
    } else {
      alert("Selecione dois heróis para comparar.");
    }
  }
  
  // Função para pesquisar personagens
  export function searchPerson(event, search, allHumans, setHumans) {
    event.preventDefault();
    if (search.trim() === "") {
      setHumans(allHumans);
      return;
    }
    const personFilter = allHumans.filter(dado => dado.name.toLowerCase().includes(search.toLowerCase()));
    setHumans(personFilter);
  }
  