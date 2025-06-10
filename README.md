# Hoop Game

This repository contains a simple basketball timing game implemented in HTML and JavaScript. A small testing setup using [Jest](https://jestjs.io/) is provided to verify the slider timing logic.

## Running the game
Open `index.html` in a web browser to play.

## Running tests
1. Install dependencies (Jest) with `npm install`.
2. Run the test suite with:
   ```bash
   npm test
   ```

The tests verify that specific `sliderPos` values yield the correct outcome strings (`"PERFECT!"`, `"Good!"`, or `"Miss!"`).
