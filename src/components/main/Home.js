import * as React from 'react';
import Tournaments from './Tournaments'

const Home = ({ activeTab }) => {
  
  const [tournaments, setTournaments] = React.useState({});

  function createData(
    id: number,
    name: string,
    language: string,
    beginDate: string,
    endDate: string,
    state: string,
  ) {
    return { id, name, language, beginDate, endDate, state };
  }
  
  const handleGetPublicTournaments = async () => {
    // POST request using fetch with async/await
    const url = 'http://localhost:8080/api/tournaments/public'
    const params = 'page=1&pageSize=1000&sortBy=id&sortOrder=ASCENDING'
    const requestOptions = {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(url + '?' + params);
    const responseJson = await response.json()
    //responseJson.pageItems.map((item) => { console.log(item); console.log(createData(item.id, item.name, item.startDate, item.endDate, item.tournamentState)) });
    const data = await responseJson.pageItems.map((item) => createData(item.id, item.Name, item.language, item.startDate, item.endDate, item.tournamentState));
    setTournaments(data);
  }

  if (activeTab === 'Diccionarios')
    return (
      <p>{activeTab}</p>
    );
    
  if (activeTab === 'Torneos')
    handleGetPublicTournaments();
    return (
      <Tournaments tournaments={tournaments}></Tournaments>
    );
  

}

export default Home;
