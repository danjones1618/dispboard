import React, { useEffect } from 'react';
import Slide from './Slide';
import './App.css';

import { useDispatch } from 'react-redux';
import { addSlide, slideTimer } from './redux/actions.js';
import {
  SLIDE_CENTER,
  SLIDE_TWITTER,
} from './Slide/Types.js';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addSlide({
      type: SLIDE_CENTER,
      content: [
        <h1>hi</h1>,
        <h2>wow</h2>,
      ]
    })); 
    dispatch(addSlide({
      type: SLIDE_TWITTER,
      tweet: "it's a tweet",
    }));
    dispatch(slideTimer());
    return; }, [dispatch]);

  return (
    <>
      <TimeSlide/>
    </>
  );
}
export default App;
