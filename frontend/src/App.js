import React, { useEffect } from 'react';
//import background from './background.png';
import './App.css';

function Slide(props){
  return (
    <div className={`slide ${props.className}`} style={props.bg !== undefined ? {backgroundImage: `url(${props.bg})`} : undefined}>
      {props.children}
    </div>
  );
}

function CenterSlide(props) {
  return (
    <Slide {...props} className={`centerslide ${props.className}`}/>
  )
}

function TimeSlide(props){
  return (
    <CenterSlide className="timeslide" bg={props.bg}>
      <h1>timeLeft</h1>
      <h3>Have you signed up your team?</h3>
    </CenterSlide>
  );
}

function App() {
  return (
    <>
      <TimeSlide/>
    </>
  );
}
export default App;
