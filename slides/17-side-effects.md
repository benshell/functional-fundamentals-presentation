## Side Effects

If a function (or component) affects something outside its scope, it is considered a side effect.

Examples:

- Modifies outside state
- Modifies an argument passed by reference (immutability is a cornerstone of functional programming)
- Makes an API call
- Invokes mobile device APIs, e.g. location, camera, keychain, etc.

Like with other impure functions, side effects make the component harder to test and likely more error prone.
