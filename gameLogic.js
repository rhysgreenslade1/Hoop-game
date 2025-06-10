function getOutcome(sliderPos) {
  if (sliderPos >= 140 && sliderPos <= 150) {
    return "PERFECT!";
  } else if ((sliderPos >= 110 && sliderPos < 140) || (sliderPos > 150 && sliderPos <= 190)) {
    return "Good!";
  }
  return "Miss!";
}

if (typeof module !== 'undefined') {
  module.exports = { getOutcome };
}
