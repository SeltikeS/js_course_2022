/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
// Class Counter
class Counter {
  constructor(newCounter = 0) {
    this._counter = newCounter;
  }

  get counter() {
    return this._counter;
  }

  next() {
    return String(++this._counter);
  }

  reset() {
    this._counter = 0;
  }
}
