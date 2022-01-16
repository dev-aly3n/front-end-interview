console.log( Error('message1'))
console.log( new Error('message2'))
// Which one is correct and why?
// Both are fine; the function call Error(…) is equivalent to the object creation expression new Error(…) with the same arguments.