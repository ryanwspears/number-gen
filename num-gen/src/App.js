import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Numble</h1>
      </header>
      <section className='mainSec'>
        <h3>Try to guess the correct number.</h3>
        <h3>You have 5 guesses.</h3>
        <h3>The correct number will be anywhere from 0 to 100.</h3>
        <h3>Good Luck!</h3>
      </section>
      <section className="gameArea">
        <input id="numGuess" className="numSelect" type="number" />
        <h4>Tries Left: </h4>
        <h3 id="triesLeft">5</h3>
        <button className="numEnter" onClick={() => guess(document.getElementById('numGuess').value)}>GUESS</button>
        <div id="guessList"></div>
      </section>
    </div>
  );
}

function numGen() {
  var chance = require('chance');
  var rand = new chance();

  var value = rand.integer({ min: 0, max: 100 });

  return value;
}

const random = numGen();

console.log(random);

var guessesLeft = 5;

function guess(num) {
  if(num === random.toString()) {
    document.getElementById("guessList").innerHTML += '<h3>' + num + ', </h3>';
    document.getElementById("guessList").innerHTML = '<h1>That is correct! Refresh the page to play again.</h1>';
    return;
  }
  else if(num !== random && guessesLeft !== 0) {
    guessesLeft--;
    document.getElementById("triesLeft").innerHTML = guessesLeft;
    document.getElementById("guessList").innerHTML += '<h3>' + num + ', </h3>';
  }
  else {
    document.getElementById("guessList").innerHTML = '<h1>You ran out of guesses! Refresh the page to try again.</h1>';
    return;
  }
}

export default App;
