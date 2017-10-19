module.exports = class Blackjack {
  constructor() {

  }

  startGame() {
    console.log('Welcome to blackjack!\n');

    while (this.keepPlaying()) {
      this.takeBets();
      this.dealHands();
      this.playOutHands();
      this.makePayouts();
    }

    console.log('Thanks for playing!');
  }

  keepPlaying() {

  }

  takeBets() {

  }

  dealHands() {

  }

  playOutHands() {

  }

  makePayouts() {

  }
};