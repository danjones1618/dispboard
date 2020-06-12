import React, { useEffect } from 'react';
import Slide from './Slide';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { addSlide, slideTimer, clearTimer } from './redux/actions.js';
import {
  SLIDE_CENTER,
  SLIDE_TWITTER,
} from './Slide/Types.js';
import { getTimerID } from './redux/selectors.js';

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
  const timerID = useSelector(getTimerID);
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
      <button onClick={() => dispatch(clearTimer(timerID))}>Clear timer</button>
      <TimeSlide/>
    </>
  );
}
export default App;
