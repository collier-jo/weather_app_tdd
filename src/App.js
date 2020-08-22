import React from 'react';
import Title from "./components/title"
import Form from "./components/form"
import Weather from "./components/weather"

function App() {

  
  return (
    <div className="App">
      <header>
        <Title />
      </header>
      <main>
        < Form/>
        < Weather/>
      </main>
    </div>
  );
}

export default App;
