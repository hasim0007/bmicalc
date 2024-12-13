import React, { useEffect, useState } from 'react'
import './calculator.css'
export const Calculator = () => {
  const [height, setheight] = useState(0)
  const [width, setwidth] = useState(0)
  const [resultvalue, setresultvalue] = useState()
  const [message, setmessage] = useState()
  
  function click(){
    let result = width/((height/100)*(height/100));
    console.log(result)
    setresultvalue(result)
    if(result < 18.5){
      setmessage(' UnderWeight')
    }
    else if(result < 24.9){
      setmessage(' NomalWeight')
    }
    else if(result < 29.9){
      setmessage(' OverWeight')
    }
    else{
      setmessage(' VeryOverWeight')
    }
  }
  return (
    <>
    <div className="container">
        <h1>BMI Calculator</h1>
        <div className="input_grp">
          <label htmlFor="">Enter Your Height(cm):</label>
          <input type="number" onChange={(e)=>{
            setheight(e.target.value)
          }}/>
          <label htmlFor="">Enter Your Weight(kg):</label>
          <input type="number" onChange={(e)=>{
            setwidth(e.target.value)
          }}/>
        </div>
        <button onClick={()=>{
          click()
        }}>Click to Calculate BMI</button>
        <div className="result">
          <p>Your BMI:{resultvalue}</p>
          <p>Result:{message}</p>
        </div>
    </div>
    </>
  )
}
