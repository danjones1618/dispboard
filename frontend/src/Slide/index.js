import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentSlide } from '../redux/selectors.js';
import {
  SLIDE_CENTER,
  SLIDE_TWITTER,
} from './Types.js';
import './Slide.css';

export default function Slide(props) {
  const slide = useSelector(getCurrentSlide);
  if (slide === undefined)
    return (<>undefined</>);
  return (
    <div
      className={`slide ${props.className}`}
      style={props.bg !== undefined ? {backgroundImage: `url(${props.bg})`} : undefined}
    >
      {JSON.stringify(slide)}
    </div>
  );
}
