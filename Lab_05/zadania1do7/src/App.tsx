import React from 'react';
import Comments from './components/produkty/Komentarze';
import './App.css';
import './components/produkty/Komentarz.css'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Comments/>
      </header>
    </div>
  );
};

export default App;