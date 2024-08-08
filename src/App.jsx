import { useState } from 'react'
import './App.css'
import './index.css'
import { MainPage } from './components/MainPage';
import TicketSystem from './components/TicketSystem';

function App() {

  
  const [showTicketSystem, setShowTicketSystem] = useState(false);

  return (
    <>
      {showTicketSystem && <TicketSystem setShowTicketSystem={setShowTicketSystem}/>}
      
      <MainPage setShowTicketSystem={setShowTicketSystem}></MainPage>
    </>
  );
}

export default App
