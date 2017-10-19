const readlineSync = require('readline-sync');
const Deck = require('./Deck');

module.exports = class Blackjack {
  constructor() {
    this.playerBankroll = 1000;
    this.betAmount = 0;

    this.deck = new Deck();
    this.deck.shuffle();

    this.playerHand = [];
    this.dealerHand = [];
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
    return this.playerBankroll > 0;
  }

  takeBets() {
    console.log(`Available bankroll: ${this.playerBankroll}`);
    const betAmount = readlineSync.question('How much would you like to bet?\n');
    this.playerBankroll -= parseInt(betAmount);
    this.betAmount = parseInt(betAmount);
  }

  dealHands() {
    this.playerHand = this.deck.draw(2);
    this.dealerHand = this.deck.draw(2);
  }

  playOutHands() {

  }

  makePayouts() {

  }
};