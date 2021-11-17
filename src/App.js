import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import Peoples from './components/Peoples';
import InfoPeople from "./components/InfoPeople";

function App() {

  /*
    state variables to define / capture person id and 
    show or not detailed person information.
  */

  const [personId, setPersonId] = useState("");
  const [init, setInit] = useState(false);

  // method to set changes in state variables

  const showPerson = (newId) =>{
    setPersonId(newId);
    setInit(true);
  }

  // main component calls
  
  return (
    <ApolloProvider client={client}>
      <header className="header">
      <h1 className="title">Ravn Star Wars Registry</h1>
      </header>

      <main>
        <div className="sidebar">
          <Peoples
          showPerson={ showPerson }
          />
        </div>

        <div className="content">
          { /* init is true when user clic on person */ }
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
