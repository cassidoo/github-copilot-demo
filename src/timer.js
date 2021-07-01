// A function to create a timer object
//
// @param callback: a function to call when the timer runs out
// @param delay: the amount of time in milliseconds to wait before calling the callback
// @param repeat: true if the timer should repeat, false otherwise
// @return: a timer object

module.exports = function Timer(callback, delay, repeat) {
  this.callback = callback;
  this.delay = delay;
  this.repeat = repeat;
  this.timer = null;
  this.running = false;

  this.start = function () {
    this.running = true;
    this.timer = setTimeout(this.callback, this.delay);
  };

  this.stop = function () {
    this.running = false;
    clearTimeout(this.timer);
  };

  this.reset = function () {
    this.stop();
    this.delay = this.repeat = 0;
  };

  this.setDelay = function (newDelay) {
    this.stop();
    this.delay = newDelay;
    this.start();
  };

  this.setRepeat = function (newRepeat) {
    this.stop();
    this.repeat = newRepeat;
    this.start();
  };

  this.setCallback = function (newCallback) {
    this.stop();
    this.callback = newCallback;
    this.start();
  };

  this.isRunning = function () {
    return this.running;
  };

  this.getDelay = function () {
    return this.delay;
  };

  this.getRepeat = function () {
    return this.repeat;
  };

  this.getCallback = function () {
    return this.callback;
  };

  this.getTimer = function () {
    return this.timer;
  };

  this.getRunning = function () {
    return this.running;
  };

  this.setDelay(delay);
  this.setRepeat(repeat);
  this.setCallback(callback);

  return this;
};
