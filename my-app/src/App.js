import React from 'react';
import Die from "./components/Die"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  
  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValues = dice.every(die => (die.value === firstValue))
    if(allHeld && allSameValues){
      setTenzies(true)
    }
  }, [dice])

  //Complementary function
  function numberRandom (multiplier) {
    return (
      Math.floor(Math.random() * multiplier)
    )
  }


 //Return an object of Dice
  function generateNewDie() {
    return {
      value: numberRandom(7),
      isHeld: false,
      id: nanoid(),
    }
  }


 //Return an array of 10; Initial array Elements of objects
  function allNewDice () {
    const numbers = []
    for(let i = 0; i < 10; i++){
      numbers.push(generateNewDie())
    }
    return numbers
  }

 //
  function rollDice (){
    if(!tenzies){
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ?
        die : generateNewDie()
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }


 // Return a new array setting the State with "setDice()"; 
 // return the same but change the boolean "isHeld" 
 // using a conditional with the id clicked and comparing with the ids in the array to change just this
  function holdDice (id) {
    setDice(oldDice => oldDice.map(die => {
      return (
        die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
        )
      }))
    }

 // Return an array of Die components for each object in allNewDice()
  let diceElements = dice.map(({value, isHeld, id}) => 
    (<Die 
      key={id}  
      value={value} 
      isHeld={isHeld}
      holdDice={()=>holdDice(id)}
  />))

  return (
    <main className="App">
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll--dice-btn' onClick={rollDice}>
        {tenzies ? "New Game" :"Roll"}
      </button>
    </main>
  );
}

export default App;
