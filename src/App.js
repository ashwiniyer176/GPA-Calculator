import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";

import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState({
    CGPA: 0.0,
    creditsDone: 0,
    creditsRegistered: 0,
    changed:false,
    requiredGPA:0
  });
  
  useEffect(() => {
    if(data.changed){
      let newCGPA=9
      let requiredGPA=0.0
      requiredGPA=newCGPA*(data.creditsDone+data.creditsRegistered)
      requiredGPA-=data.creditsDone*data.CGPA
      requiredGPA/=data.creditsRegistered
      setData({requiredGPA:requiredGPA})
    }
    
  }, [data]);
  if (data.requiredGPA==0){
    return (
      <div className="layout">
        <h1>GPA Calculator!</h1>
        <InputForm setData={setData} />
      </div>
    );}
  else {
    return (
      <div className="layout">
        <h1>GPA Calculator!</h1>
        <InputForm setData={setData} />
        <h2> {data.requiredGPA} </h2>
      </div>
    );
    }

}
