import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [inputNumber, setInputNumber] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [lunch, setLunch] = useState('Nearly')

  useEffect(() => {

  }, [lunch]);

  useEffect(() => {
    if (inputNumber === 0) {
      setAnswer('')
    }
      else if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuzz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer("");
    }
  }, [inputNumber])



  const handleInc = () => {
    setInputNumber(inputNumber + 1);
  };

  const handleSec = () => {
    if (lunch === 'Go now') {
      setLunch("Nearly");
    }
    else {
      setLunch('Go now');
    }
  }


  return (
    <>
      <button onClick={handleInc}> + </button>
      <button onClick={handleSec}> Lunch</button>
      <h2>Number is {inputNumber}</h2>
      <h3>{answer}</h3>
      <h3>{lunch}</h3>
    </>
  );
}

export default App;
