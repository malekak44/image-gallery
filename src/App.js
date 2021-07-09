import { useEffect, useState } from 'react';
import './App.css';
import Slide from './components/Slide/Slide';
import Thumb from './components/Thumb/Thumb';
import List from './components/List/List';
import Chart from './components/Chart/Chart';
import axios from 'axios';
import Frag from './components/Frag/Frag';

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios("https://pixabay.com/api/?key=22070080-e1d7d3677e88a25ad3b672045&q=tower+bridge&image_type=photo")
      .then(data => setPhotos(data.data.hits))
  }, []);

  return (
    <div className="App">
      <Slide></Slide>
      <div className="images-container">
        <div className="form">
          <input type="search" autoComplete="off" id="search" />
          <button id="searchBtn">Search</button>
        </div>
        {photos.map(ph => <Thumb photo={ph} key={ph.id}></Thumb>)}
      </div>
      <div className="images-container" id="material" style={{ borderColor: "#D12C73" }}>
        <List></List>
      </div>
      <div style={{ width: "40%", margin: "auto" }}>
        <Chart></Chart>
        <Frag></Frag>
      </div>
    </div>
  );
}

export default App;
