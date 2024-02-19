## So how does this work in practice?

Most programming languages are not strictly functional, and that's okay.

In a very pure functional language like Haskell, the time would have to get passed into your function; basically a global state that's passed around to give access to the time. This is done with an I/O Monad.

Key takeaway: _try_ to make your functions (e.g. Components) pure, but if they aren't that's okay.
