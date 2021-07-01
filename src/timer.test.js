// Importing:
let Timer = require("./timer.js");

// These tests were written by the AI, and
// are not intended to be read by humans.
// Loljk the AI wrote that sentence, these
// tests will not pass.

// A test for our `timer` module.
describe("timer", () => {
  // A test for the `Timer` constructor.
  describe("Timer", () => {
    it("should create a new `Timer` instance", () => {
      const timer = new Timer();
      expect(timer).to.be.an.instanceOf(Timer);
    });
  }),
    // A test for the `Timer#start` method.
    describe("Timer#start", () => {
      it("should start the timer", () => {
        const timer = new Timer();
        timer.start();
        expect(timer.started).to.be.true;
      });
    }),
    // A test for the `Timer#stop` method.
    describe("Timer#stop", () => {
      it("should stop the timer", () => {
        const timer = new Timer();
        timer.start();
        timer.stop();
        expect(timer.started).to.be.false;
      });
    }),
    // A test for the `Timer#reset` method.
    describe("Timer#reset", () => {
      it("should reset the timer", () => {
        const timer = new Timer();
        timer.start();
        timer.reset();
        expect(timer.started).to.be.false;
      });
    }),
    // A test for the `Timer#getTime` method.
    describe("Timer#getTime", () => {
      it("should return the time elapsed", () => {
        const timer = new Timer();
        timer.start();
        timer.stop();
        expect(timer.getTime()).to.be.a("number");
      });
    });
});
