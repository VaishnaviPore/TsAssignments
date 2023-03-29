class Arithematic
{
    Number1 : number
    Number2 : number

    constructor(No1 : number, No2 : number)
    {
        this.Number1 = No1
        this.Number2 = No2
    }

    Addition()
    {
        return this.Number1+this.Number2
    }

    Subtraction()
    {
        return this.Number1-this.Number2
    }

    Multiplication()
    {
        return this.Number1*this.Number2
    }

    Division()
    {
        return this.Number1/this.Number2
    }
}

var Obj1 = new Arithematic(11, 10)
console.log("Arithmetic operations of first object.")
var Ret : number = Obj1.Addition()
console.log("Addition is : "+Ret)

var Ret : number = Obj1.Subtraction()
console.log("Subtraction is : "+Ret)

var Ret : number = Obj1.Multiplication()
console.log("Multiplication is : "+Ret)

var Ret : number = Obj1.Division()
console.log("Division is : "+Ret+"\n")

var Obj2 = new Arithematic(45,16)
console.log("Arithmetic operations of Second object.")
var Ret : number = Obj2.Addition()
console.log("Addition is : "+Ret)

var Ret : number = Obj2.Subtraction()
console.log("Subtraction is : "+Ret)

var Ret : number = Obj2.Multiplication()
console.log("Multiplication is : "+Ret)

var Ret : number = Obj2.Division()
console.log("Division is : "+Ret)
