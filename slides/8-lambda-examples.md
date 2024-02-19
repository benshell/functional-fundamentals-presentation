## Other Lambda Calculus Examples

(It gets complex fast, and these are still simple examples.)

### Constants (always returns the first value, just like our boolean TRUE)

K = λx. λy. x

### XOR

xor = λa.λb.a (b (λa.λb.b) (λa.λb.a)) b

### Y-Combinator (recursion using "self application")

(Note that this is also the name of the most famous Silicon Valley startup accelerator.)

Y = λt.(λx. t (x x)) (λx. t (x x))
