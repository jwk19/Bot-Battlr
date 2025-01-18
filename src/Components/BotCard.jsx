
import React from 'react';

const BotCard = ({ bot, handleClick }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button className="add-btn" onClick={handleClick}>Add to Army</button>
    </div>
  );
};

export default BotCard;
