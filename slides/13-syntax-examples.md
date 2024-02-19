## Syntax Examples

```
ADD = λx.λy.x+y
```
```
const add = (x) => (y) => x + y
```
```
const Greeting = (greeting) => (name) => `${greeting} ${name}`
```
```
React.createElement(Greeting, { greeting: 'Hello', name: 'World' })
```
```
<Greeting greeting="Hello" name="World" />
```
