import React, { useState } from 'react';
import './App.css';
import Gallery from './components/Characters';
import Sidebar from './components/Sidebar';

function App() {
  const [selectedEpisod, setSelectEpisod] = useState('');
  return (
    <div className='main'>
      <section className="product">
        <div className="product__photo">
          <Sidebar selectedEpisode={selectedEpisod} setSelectEpisod={setSelectEpisod} />
        </div>
        <div className="product__info">
          <Gallery selectedEpisode={selectedEpisod} />
        </div>
      </section>

      <footer>
        <p>Use demo API</p>
      </footer>
    </div>
  );
}

export default App;
