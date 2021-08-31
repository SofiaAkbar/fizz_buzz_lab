import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [inputNumber, setInputNumber] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [homeTime, setHomeTime] = useState('Nearly')

  // useEffect(() => {

  // }, [homeTime]);

  useEffect(() => {
    if (inputNumber === 0) {
      setAnswer('Nope')
    }
      else if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuzz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer("Nope");
    }
  }, [inputNumber])



  const handleInc = () => {
    setInputNumber(inputNumber + 1);
  };

  const handleSec = () => {
    if (homeTime === 'Go now') {
      setHomeTime("Nearly");
    }
    else {
      setHomeTime('Go now');
    }
  }

  return (
    <>
      <button onClick={handleInc}> + </button>
      <button onClick={handleSec}>Break</button>
      <h2>Number is {inputNumber}</h2>
      <h3>{answer}</h3>
      <h4>Home time: {homeTime}</h4>
    </>
  );
}

export default App;
