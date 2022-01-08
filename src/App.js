import './App.css';
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [ totalNumber, setTotalNumber ] = useState(1580000);
  const [ numberToFind, setNumberToFind ] = useState(1);
  const [ finalPrimeNumberPos, setFinalPrimeNumberPos ] = useState(0);
  const [ primeNumbers, setPrimeNumbers ] = useState([]);
  const [ coloredIndex, setColoredIndex ] = useState("0");
  const [ presentInTheList, setPresentInTheList ] = useState("");
  
  let primeno = [];
  let numberToFindd = 0;
  let v = 1;

  function submitNumber(a){
    setTotalNumber(a.target.value)
  }

  function submitNumberToFind(b){
    setNumberToFind(b.target.value);
    numberToFindd = b.target.value;
    console.log(numberToFindd)
  }

  function submitButtonNumber(c){
    // console.log(c)
    setNumberToFind(c);
    numberToFindd = c;
    setColoredIndex(c);
    displayResult(c,v);
  }

  function displayPrimeNumbers(){

    primeno = [];
    let n = 0;
    for(let i = 2 ; i<totalNumber ; i++){
      
      let midNumber = (i/2);
      midNumber = Math.round(midNumber)
      // console.log("i :",i,"  midNumber :",midNumber)
 
      for(let j = 2 ; j <= midNumber ; j++){
        
        if(i%j===0){
          n++;
        }
        // console.log("value of n :",n)
        console.log("calculating")
      }
      if(n===0){
        primeno.push(i)
      }
    n=0;
    }

    setPrimeNumbers(primeno);
    
  }

  function displayResult(ntf,v){
    
    let finalNtf = parseInt(numberToFind);

    let max = primeNumbers.length - 1;
    let min = 0;
    let currentMidNumber = 0;

    if(v === 1){
      finalNtf = ntf;
      console.log(finalNtf)
    }else{
      setColoredIndex(finalNtf);
    }
    
    console.log("numberToFindd :",numberToFindd);
    console.log("finalNtf type :",typeof(finalNtf),"finalNtf : ",finalNtf);
    while(min <= max){
      console.log("haha")
        currentMidNumber = Math.floor((min+max)/2);

        // console.log("Minimum :",min," Maximum :",max," CurrentMidNumber :",currentMidNumber);
        // console.log(primeNumbers[currentMidNumber],finalNtf)
        if(primeNumbers[currentMidNumber] === finalNtf){
          setFinalPrimeNumberPos(currentMidNumber);
          break;
        }else if(primeNumbers[currentMidNumber] < finalNtf){
          min = currentMidNumber + 1;
        }else {
          max = currentMidNumber - 1;
        }

    }
    if(primeNumbers[currentMidNumber] !== finalNtf){
      setPresentInTheList("No")
      setFinalPrimeNumberPos("Not Present In The List !!")
    }
    else{
      setPresentInTheList("Yes")
    }
  }

  return (
    <div className="App">
      <h1>Binary search Algorithm !</h1>
      Number:<input type="number" value={totalNumber} onChange={submitNumber}/>
      <button onClick={displayPrimeNumbers}>Submit</button>
      <br></br>
      Number to Find:<input type="number" value={numberToFind} onChange={submitNumberToFind}/>
      <button onClick={displayResult}>Submit</button>
      <p>Prime numbers inside of {totalNumber} are :</p>
      {console.log("coloredIndex : ",coloredIndex)}
      {
        primeNumbers.map((numbers)=>(parseInt(coloredIndex)===numbers ?<Button key={numbers} className="numberBtn" variant="primary" onClick={()=>submitButtonNumber(numbers)}>{numbers}</Button>:<Button key={numbers} className="numberBtn" variant="secondary" onClick={()=>submitButtonNumber(numbers)}>{numbers}</Button>))
      }
      <p>Present in the List : {presentInTheList}</p>
      <p>Position in the List : {finalPrimeNumberPos}</p>
    </div>
  );
}

export default App;
