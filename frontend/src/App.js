import React from 'react';
//import background from './background.png';
import './App.css';

function Slide(props){
  return (
    <div className="slide" style={{backgroundImage: `url(${props.bg})`}}>{props.children}</div>
  );
}

function TimeSlide(props){
  var endTime = new Date("2020-03-01 11:00");
  var startDay = new Date("2020-02-29");
  var delta = new Date(endTime - (new Date()) + startDay);
  return (
    <Slide className="timeslide" bg={props.bg}>
      <h1>{delta.toTimeString().split(" ")[0]}</h1>
      <h3>Have you signed up your team?</h3>
    </Slide>
  );
}

function App() {
  return (
    <>
      <TimeSlide bg="none"/>
    </>
  );
}
export default App;
