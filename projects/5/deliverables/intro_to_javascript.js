console.log('Intro to JS')
//Variables
//namespace & global
// es5
//global variable. x defines the global space 
// es6
//let x = 100;
//const x = 100;

(function(){
	var x;
function foo () {
	console.log(x);

}
foo();
//var x = 1000;
})();

var a = 1 // int
var b ='abc' // string
var c = 3.0 // float
var d = function() {console.log ('this si a function expression')} // function
d ();
function foo() {console.log('this is a function declaration')} // foo
foo();
//IIFE 
(function(){
	console.log('IIFE funtion');
})();

var b= 10
var c= 50

switch (b){
	case 10:
	console.log(b, "It's 10");
	break;
	case 100:
	console.log('It\'s 100');
	default;
	console.log('default case')}
	break;
//Types
//Operators

//'&&' === 'and'
//'||' === 'or'
//'==' === 'equality'
//'===' === 'strict equality'
//'!=' === 'not equality'
//'=~' ==='regex'
//'=' === 'assignment'

//Objects

var object = {
	foo: function(){
		console.log("Im object function foo()");
}
};
object.foo(10, 20)

function foo (10, 20) {
	var total = 10 + 20;
	console.log(foo);
}
foo(10, 20)

object.prototype.bar = function() {
	console.log("Object prototype of bar()")
};
//Arrays
//Conditionals
//Expressions