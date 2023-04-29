import {useEffect, useState} from 'react';

const width = 8;
const candyColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];


const App = () => {

  const[currentColorArragement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];
    const board = [];
    for (let i = 0; i < width * width ; i++) {
      const randomColor = Math.floor(Math.random() * candyColors.length);
      randomColorArrangement.push(randomColor);

  }
  setCurrentColorArrangement(randomColorArrangement);
  }
  useEffect =(() => {
    createBoard(), []
  }



  return (
    <div>
    </div>
  )
}

export default App
