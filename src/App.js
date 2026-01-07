import logo from './logo.svg';
import './App.css';
import { useState, useEffect  } from 'react';
import React from './components/Results';
import Results from './components/Results';



function App() {

  const [points, setPoints] = useState(0);
  const [guess, setGuess] = useState({});
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [result, setResult] = useState('');

  useEffect(() => {
    // 🚫 Do nothing if input is empty
    if (guess === '') {
      setResult('');
      return;
    }

    const numericGuess = Number(guess);

    if (Number.isNaN(numericGuess)) return;

    if (numericGuess < secretNumber) {
      setPoints((p) => p - 1);
      setResult('low');
    } else if (numericGuess > secretNumber) {
      setPoints((p) => p - 1);
      setResult('high');
    } else {
      setPoints((p) => p + 1);
      setResult('correct');
    }
  }, [guess]); // 👈 runs when user types
  function handleFormFields(e){
      const fieldValue = e.target.value;

      setGuess( fieldValue );
  }

  return (
    <div className="container">
      <div className='top'>
        <label htmlFor='guessNumber'>Guess the number 1 to 100</label>
        <div className='scoreCard'>Your Score : {points}</div>
      </div>
        <input id='guessNumber' type='number' name='guessNumber' onChange={handleFormFields}/>
        <Results result={result}/>
    </div>
  );
}

export default App;