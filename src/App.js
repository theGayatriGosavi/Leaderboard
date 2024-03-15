import React from 'react';
import Leaderboard from './Components/Leaderboard/Leaderboard'; // Importing the Leaderboard component
import './App.css'; // Importing global styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game Leaderboard</h1>
      </header>
      <main>
        <Leaderboard /> {/* Rendering the Leaderboard component */}
      </main>
      <footer>
       
      </footer>
    </div>
  );
}

export default App;
