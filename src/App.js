import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import Peoples from './components/Peoples';
import InfoPeople from "./components/InfoPeople";

function App() {

  // Declaración de una variable de estado que llamaremos "count"
  const [personId, setPersonId] = useState("");
  const [init, setInit] = useState(false);
  const [titlePage, setTitlePage] = useState('Ravn Star Wars Registry');

  // Metodo
  const showPerson = (newId) =>{
    setPersonId(newId);
    setInit(true);
  }
  
  return (
    <ApolloProvider client={client}>
      <header className="header">
      <h1 className="title">{titlePage}</h1>
      </header>

      <main>
        <div className="sidebar">
          <Peoples
          showPerson={ showPerson }
          />
        </div>

        <div className="content">
          { init && 
            <InfoPeople 
            id={personId}
            />
          }
          
        </div>
      </main>
      
    </ApolloProvider>
  );

}

export default App;
