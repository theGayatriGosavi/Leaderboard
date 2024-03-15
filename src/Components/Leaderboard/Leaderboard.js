import React, { useState } from 'react';
import Tabs from '../Tabs';
import styles from './Leaderboard.module.css';

const gamesData = {
  'Candy Crush': [{ player: 'Monty', score: 700 }, { player: 'Chinu', score: 620 },{ player: 'Jennie', score: 580 },{ player: 'Lisa', score: 500 },{ player: 'Taetae', score: 470 },{ player: 'Rose', score: 340 },{ player: 'Jin', score: 210 },{ player: 'Jimin', score: 170 },{ player: 'Tom', score: 100 },{ player: 'AugustD', score: 90 },],
  'Memory Game': [{ player: 'Lisa', score: 720 }, { player: 'Jennie', score: 630 },{ player: 'Monty', score: 600 },{ player: 'Chinu', score: 550 },{ player: 'AugustD', score: 470 },{ player: 'Taetae', score: 340 },{ player: 'Junkook', score: 210 },{ player: 'RM', score: 170 },{ player: 'Timothy', score: 100 },{ player: 'Jisoo', score: 90 },],
  'Tic Tac Toe': [{ player: 'Chinu', score: 800 }, { player: 'Monty', score: 720 },{ player: 'Lisa', score: 680 },{ player: 'Jennie', score: 600 },{ player: 'Kookie', score: 570 },{ player: 'Demon', score: 440 },{ player: 'Taetae', score: 310 },{ player: 'Peirra', score: 170 },{ player: 'Tiya', score: 100 },{ player: 'Harry', score: 90 },],
  'Tetris': [{ player: 'Taetae', score: 500 }, { player: 'Jennie', score: 420 },{ player: 'Chinu', score: 480 },{ player: 'Monty', score: 400 },{ player: 'Lisa', score: 370 },{ player: 'Tina', score: 340 },{ player: 'Panther', score: 210 },{ player: 'Giggs', score: 170 },{ player: 'Peppa Pig', score: 100 },{ player: 'Ron', score: 90 },],
  'Flappy Bird': [{ player: 'Jennie', score: 700 }, { player: 'Taetae', score: 620 },{ player: 'Lisa', score: 580 },{ player: 'Taehyung', score: 500 },{ player: 'Hobi', score: 470 },{ player: 'Monty', score: 340 },{ player: 'Jack', score: 210 },{ player: 'Jay Park', score: 170 },{ player: 'Robert', score: 100 },{ player: 'Emma', score: 90 },],
};

function Leaderboard() {
  const [activeTab, setActiveTab] = useState(Object.keys(gamesData)[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.leaderboard}>
      <Tabs tabs={Object.keys(gamesData)} activeTab={activeTab} onTabClick={handleTabClick} />
      <div className={styles.leaderboardContent}>
        
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {gamesData[activeTab].map((player, index) => (
              <tr key={index}>
                <td>{player.player}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
