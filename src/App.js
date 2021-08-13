import { useEffect, useState } from 'react';
import './App.css';
import Slide from './components/Slide/Slide';
import Thumb from './components/Thumb/Thumb';
import List from './components/List/List';
import Chart from './components/Chart/Chart';
import Frag from './components/Frag/Frag';

function App() {
  const [inputVal, setInputVal] = useState('');
  const handleBlur = (e) => {
    setInputVal(e.target.value);
  }

  const [images, setImages] = useState([]);
  const searchImages = () => {
    const url = `https://pixabay.com/api/?key=15674931-a9d714b6e9d654524df198e00&q=${inputVal || "English Cottage"}&image_type=photo&pretty=true`;
    fetch(url)
      .then(res => res.json())
      .then(data => setImages(data.hits))
  };

  useEffect(searchImages, [inputVal]);

  return (
    <div className="App">
      <Slide></Slide>
      <div className="images-container">
        <div className="form">
          <input type="search" autoComplete="off" onBlur={handleBlur} placeholder='Search here...' />
          <button id="searchBtn" type="submit" onClick={searchImages}>Search</button>
        </div>
        {
          images.map(ph => <Thumb photo={ph} key={ph.id}></Thumb>)
        }
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


//Fetching Data From Random User
// user.name?.first