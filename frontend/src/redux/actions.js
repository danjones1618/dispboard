import {
  RESET_STORE,
  SLIDE_ADD,
  SLIDE_NEXT,
} from 'actionTypes.js';

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
