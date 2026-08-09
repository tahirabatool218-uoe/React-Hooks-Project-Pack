import { useState } from 'react'
import Accordion from './components/Accordion'


function App() {


  return (
   <div className="app">
      <h1>Accordion App</h1>
      <p>Click on a question to view the answer.</p>

      <Accordion />
    </div>
  );
}

export default App
