export const getCurrentSlide = ( state, ) => state.slides.currentSlide === -1
  ? undefined
  : state.slides.slides[state.slides.currentSlide];
export const getTimerID = ( state, ) => state.slides.timerID;
