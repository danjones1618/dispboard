import {
  SLIDE_ADD,
  SLIDE_NEXT,
} from '../actionTypes.js';

export const slides = (state = {
  currentSlide: -1,
  slides: [],
}, action) => {
  switch (action.type) {
    case SLIDE_ADD:
      return Object.assign({}, state, {
        currentSlide: state.currentSlide === -1 ? 0 : state.currentSlide,
        slides: [
          ...(state.slides),
          {
            type: "time",
          }
        ]
      });
    case SLIDE_NEXT:
      return Object.assign({}, state, {
        currentSlide: state.currentSlide === -1 ? -1 : state.currentSlide + 1,
      });
    default:
      return state;
  }
};
