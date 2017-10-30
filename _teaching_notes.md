**Blackjack.js**

The `keepPlaying` method describes whether to continue the next hand of
blackjack or not. There were a few good options here but I decided to let game
keep running as long as the player still has money to bet.

Now you might be wondering should we create a `Player` class, or more generally,
when should we introduce new classes? In this case, I don't think we need a
`Player` class until the `Blackjack` class is doing too many player related
things.

As an analogy, imagine you are running a business on your own. When the business
is small you can do everything. But as your responsibilities grow you may want
to hire a sales person, or a designer, etc. Managing a two-person company is
somewhat more complicated than a one-person company but it's worth it if you can
split enough of the work.

In programming, splitting the work is more about managing complexity rather than
time or money. When a class does too many things it becomes hard to understand
how it works and it gets harder to make changes without breaking something. By
putting all the player related code into a `Player` class, we isolate that code
so that when we're working in the `Player` class we only have to think about
player related things.

In our case the player related code is just one value, the player's bankroll, so
it's not worth the added complexity of creating a new class. But later if it
turns out that we need to do a lot of player related things, we can always
refactor the code then.

#### Follow Along
Next let's work on the `takeBets` method. I'll now describe a general three
step approach:

1. Think about what needs to happen in the method
2. Consider if you want some other object to be responsible for the work in this
method.
3. Translate to code, creating new methods if needed

Let's see the approach in action in the next commit.