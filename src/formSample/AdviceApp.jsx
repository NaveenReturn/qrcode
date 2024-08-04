import React,{useState} from 'react'
import "./Advice.css";

export const AdviceApp = () => {

    const [advice,setAdvice] = useState("please click button to get advice");
    const [count,setCount] = useState(0);

   async function getAdvice(){
         const res = await fetch("https://api.adviceslip.com/advice");
         const data = await res.json();
        //  console.log(data)
        setAdvice(data.slip.advice);
        setCount((c)=> c+1)
    }
  return (
    <div>
        <h3>{advice}</h3>
        <button  onClick={getAdvice}>Get Advice</button>
        <p>you have read <b>{count}</b>pieces of advice</p>
    </div>
  )
}
