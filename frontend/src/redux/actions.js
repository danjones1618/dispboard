import {
  RESET_STORE,
  SLIDE_ADD,
  SLIDE_NEXT,
  SLIDE_TIMER_CLEAR,
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

export const setSlideTimerClear = (id) => ({
  type: SLIDE_TIMER_CLEAR,
  id,
});

export const slideTimer = () => (
  (dispatch) => {
    const id = setInterval(() => dispatch(nextSlide()), 5000);
    dispatch(setSlideTimerClear(id));
  }
);
