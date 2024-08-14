
import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, removeBot, dischargeBot }) => {
  return (
    <div className="your-bot-army">
      {army.map(bot => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button className="release-btn" onClick={() => removeBot(bot.id)}>Release</button>
          <button className="discharge-btn" onClick={() => dischargeBot(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
