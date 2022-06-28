// answer:
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// explanation:

// the first T at the first line point to an object of types, like interfaces: 
// object of types
type x = {type1:number, type2:string};
interface y {type1:number; type2:string;};

// another keyword is keyof operator that gives us the key of an "object of types" as a union of strings
type m = keyof x; // it's equal to type m = "type1" | "type2";
type n = "type1" | "type2";
// here m and n are equal

// so (K extends keyof T) means: type K = "kye1" | "key2" | "key3" | ...
//  the next keyword is "in". "in" operator iterat through K and acts like a loop to generate types
// and T[P] acts like js when we read a property from an object: obj["type1"]
// finally it will iterate keys like "key1" and assign the value of them via K["key1"] >>>> key1: K["key1"]


// related urls:
// "in" operator: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html  ||  https://learntypescript.dev/07/l5-in-type-guard
// keyof operator: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html


//  test cases:
interface Todo {
    title: string
    description: string
    completed: boolean
  }
//   MyPick<Todo, 'title'>
  interface Expected1 {
    title: string
  }
  
//   MyPick<Todo, 'title' | 'completed'>
  interface Expected2 {
    title: string
    completed: boolean
  }
  