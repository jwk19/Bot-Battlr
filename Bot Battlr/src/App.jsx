
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

const App = () => {
  const [army, setArmy] = useState([]);
  const [showArmy, setShowArmy] = useState(false);

  const addToArmy = (bot) => {
    if (!army.some(item => item.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    }).then(() => removeBot(botId));
  };

  return (
    <div className="App">
      {/* Navbar Component */}
      <Navbar showArmy={showArmy} setShowArmy={setShowArmy} />

      {/*render either the BotCollection or YourBotArmy based on the state */}
      {showArmy ? (
        <YourBotArmy army={army} removeBot={removeBot} dischargeBot={dischargeBot} />
      ) : (
        <BotCollection addToArmy={addToArmy} />
      )}
    </div>
  );
};

export default App;
