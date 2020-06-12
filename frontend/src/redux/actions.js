import {
  RESET_STORE,
  SLIDE_ADD,
  SLIDE_NEXT,
  SLIDE_TIMER_ID,
} from './actionTypes.js';

export const resetStore = () => ({
  type: RESET_STORE,
});

export const addSlide = slide => ({
  type: SLIDE_ADD,
  slide,
});

export const nextSlide = () => ({
  type: SLIDE_NEXT,
});

export const setSlideTimerID = (id) => ({
  type: SLIDE_TIMER_ID,
  id,
});

export const clearTimer = (timerID) => {
  clearInterval(timerID);
  return setSlideTimerID(-1);
};

export const slideTimer = () => (
  (dispatch) => {
    const id = setInterval(() => dispatch(nextSlide()), 5000);
    dispatch(setSlideTimerID(id));
  }
);

