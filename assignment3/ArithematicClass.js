var Arithematic = /** @class */ (function () {
    function Arithematic(No1, No2) {
        this.Number1 = No1;
        this.Number2 = No2;
    }
    Arithematic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithematic.prototype.Subtraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithematic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithematic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithematic;
}());
var Obj1 = new Arithematic(11, 10);
console.log("Arithmetic operations of first object.");
var Ret = Obj1.Addition();
console.log("Addition is : " + Ret);
var Ret = Obj1.Subtraction();
console.log("Subtraction is : " + Ret);
var Ret = Obj1.Multiplication();
console.log("Multiplication is : " + Ret);
var Ret = Obj1.Division();
console.log("Division is : " + Ret + "\n");
var Obj2 = new Arithematic(45, 16);
console.log("Arithmetic operations of Second object.");
var Ret = Obj2.Addition();
console.log("Addition is : " + Ret);
var Ret = Obj2.Subtraction();
console.log("Subtraction is : " + Ret);
var Ret = Obj2.Multiplication();
console.log("Multiplication is : " + Ret);
var Ret = Obj2.Division();
console.log("Division is : " + Ret);
