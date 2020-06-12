import {
  SLIDE_ADD,
  SLIDE_NEXT,
  SLIDE_TIMER_ID,
} from '../actionTypes.js';

export const slides = (state = {
  timerID: -1,
  currentSlide: -1,
  slides: [],
}, action) => {
  switch (action.type) {
    case SLIDE_ADD:
      return Object.assign({}, state, {
        currentSlide: state.currentSlide === -1 ? 0 : state.currentSlide,
        slides: [
          ...(state.slides),
          action.slide,
        ]
      });
    case SLIDE_NEXT:
      return Object.assign({}, state, {
        currentSlide: state.currentSlide === -1
          ? -1
          : state.currentSlide + 1 >= state.slides.length
            ? 0
            : state.currentSlide + 1,
      });
    case SLIDE_TIMER_ID:
      return Object.assign({}, state, {
        timerID: action.id,
      });
    default:
      return state;
  }
};
