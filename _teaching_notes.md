**Blackjack.js**

First let's describe what we want to happen in the `takeBets` method:

1. Show the player how much they have in their bankroll.
2. Ask the player how much they want to bet.
3. Reduce the player's bankroll by the bet amount.
4. Save the bet amount so you can pay out later.

None of these things look like they should be handled by another object. They're
also simple enough to code directly without creating any new methods.

For getting the user's input we use the `readline-sync` library. It's good to
have a record of any dependencies we install so I start by generating the
`package.json` with the commmand `npm init`. Then `npm install readline-sync`.
We also used backticks for string interpolation. See references for usage.

#### Follow Along
Next let's work on the `takeBets` method. I'll now describe a general three
step approach:

1. Think about what needs to happen in the method
2. Consider if you want some other object to be responsible for the work in this
method.
3. Translate to code, creating new methods if needed

Next let's try to implement `dealHands`.

#### References

[Template literals (backtick strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

[anseki/readline-sync](https://github.com/anseki/readline-sync)