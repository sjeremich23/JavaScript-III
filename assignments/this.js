/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global - window scope
 * 2. implicit - reference to left of the dot
 * 3. Whenever a constructor function is used it refers to the specific instance of the object that is created
 * 4. Whenever call or apply method is used this is explicitly defined
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
function functionName(name) {
	console.log(this);
	return name;
}

functionName("Shane");
// Principle 2
// code example for Implicit Binding
const obj = {
	greeting: "Hello",
	sayHello: function(name) {
		console.log(`${this.greeting} my name is ${name}`);
		console.log(this);
	},
};
obj.sayHello("Rachel");

// Principle 3
// code example for New Binding
function someVar(name) {
	this.name = name;
	this.objFunction = function() {
		console.log(`This is ${name}`);
	};
}
let variable = new someVar("Shane");
variable.objFunction();

// Principle 4
// code example for Explicit Binding
function myName(att) {
	this.name = att.name;
	this.speak = function() {
		return `This is ${this.name}`;
	};
}

const shane = new myName({
	name: "Shane",
});
console.log(shane);
console.log(shane.speak());
