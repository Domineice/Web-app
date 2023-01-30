var add = (a,b)=>{
  return a+b;
}
console.log(add(5,3))
var result = [1, 2, 3, 4].filter(n => n % 2 === 0).map(n => n * n);
console.log(result);

let john = {
    name: "John", 
    helloLater: function() {
    // use arrow function
    setTimeout(
        () => {
            // `this` is available here! 
            console.log("Hello, I'm " + this.name);
        }, 3000); 
    }
}
john.helloLater();
class Person{
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log("HEllo "+this.name);
  }
}
var naiss = new Person("Pbp");
naiss.greet();


 var name = 'Baidu';
var str = `Hello, I'm ${name}.`;
console.log(str);

let foo=1;
let bar=2;
let prefix = 'foo'; 

let obj = {
  // computed property
  [prefix + 'abc']: 1,
  // method definition without "function" keyword
  foo() {
    console.log('foo!');
  }
};
console.log(obj['fooabc'])
obj.foo()

class Jedi{
  constructor(){
    this.forceIsDark = false;
  }
  force()
  {
    return (this.forceIsDark ? 'Join ':'Fear is the path to ')+'the dark side';
  }
  say()
  {
    console.log("Hello, OBI");
  }
}
class Sith extends Jedi{
  constructor(){
    super();
    this.forceIsDark = true;
  }
  say()
  {
    console.log("Yes, Master");
  }
}
let yoda = new Jedi();
let darth = new Sith();
yoda.say()
darth.say()
console.log(yoda.forceIsDark)
console.log(darth.forceIsDark)

console.log(yoda.force())
console.log(darth.force())

class MyMath{
    add = (a,b)=>{
      return a+b;
    }
    minus = (a,b)=>{
      return a-b;
    }
    multiply = (a,b)=>{
      return a*b;
    }
    divide = (a,b)=>{
      return a/b;
    }
   }
   var result = new MyMath();
   console.log(result.add(2,3));
   console.log(result.minus(2,3));
   console.log(result.multiply(2,3));
   console.log(result.divide(2,0));
   