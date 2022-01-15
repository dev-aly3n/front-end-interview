// The use strict literal is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript code by throwing an error if a global variable is created by mistake. For example, the following program will throw an error:
function doSomething(val) {
  "use strict"; 
  x = val + 10;
}
// It will throw an error because x was not defined and it is being set to some value in the global scope, which isn't allowed with use strict The small change below fixes the error being thrown:
function doSomething(val) {
  "use strict"; 
  var x = val + 10;
}