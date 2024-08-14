
import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ addToArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} handleClick={() => addToArmy(bot)} />
      ))}
    </div>
  );
};

export default BotCollection;
