const readlineSync = require('readline-sync');
const Deck = require('./Deck');
const Player = require('./Player');

module.exports = class Blackjack {
  constructor() {
    this.betAmount = 0;

    this.deck = new Deck();
    this.deck.shuffle();

    this.player = new Player();
    this.dealer = new Player();
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
    return this.player.bankroll > 0;
  }

  takeBets() {
    console.log(`Available bankroll: ${this.player.bankroll}`);
    const betAmount = readlineSync.question('How much would you like to bet?\n');
    this.player.bankroll -= parseInt(betAmount);
    this.betAmount = parseInt(betAmount);
  }

  dealHands() {
    this.player.hand = this.deck.draw(2);
    this.dealer.hand = this.deck.draw(2);
  }

  playOutHands() {
    const blackjack = this.dealer.handValue() == 21 || this.player.handValue() == 21;

    if (!blackjack) {
      while (this.player.handValue() < 22) {
        this.printHands({hideDealerCard: true});
        const action = readlineSync.question('Enter H for hit or S for stay.\n');
        if (action == 'H') {
          this.player.hand = this.player.hand.concat(this.deck.draw(1));
        } else if (action == 'S') {
          while (this.dealer.handValue() < 17) {
            this.dealer.hand = this.dealer.hand.concat(this.deck.draw(1));
          }
          break;
        }
      }
    }
  }

  printHands(opts={}) {
    const dealerHand = this.dealer.hand.map(card => card.str);
    if (opts.hideDealerCard) {
      dealerHand[0] = '(hidden)';
    }
    const playerHand = this.player.hand.map(card => card.str);

    console.log(`Dealer has: ${dealerHand.join(' ')}`);
    console.log(`Player has: ${playerHand.join(' ')}`);
  }

  makePayouts() {

  }
};