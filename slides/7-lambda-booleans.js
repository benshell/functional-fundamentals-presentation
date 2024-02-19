/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Building blocks: defining "values"
const TRUE = (t) => (f) => t
const FALSE = (t) => (f) => f

// Testing (using Quokka)
const resultTrue = TRUE(1)(0)
const resultFalse = FALSE(1)(0)
resultTrue
resultFalse

// Defining the inverse
const NOT_TRUE = TRUE(FALSE)(TRUE)

// Testing (using Quokka)
const resultNotTrue = NOT_TRUE(1)(0)
resultNotTrue
