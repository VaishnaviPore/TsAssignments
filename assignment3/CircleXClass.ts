class Circle
{
    Radius : number
    PI : number

    constructor(RadiusValue : number)
    {
        this.Radius = RadiusValue
        this.PI = 3.14
    }

    AreaOfCicle()
    {
        return this.PI*this.Radius*this.Radius
    }
}
class CircleX extends Circle
{
    constructor(RValue : number)
    {
        super(RValue)
    }

    Circumference()
    {
        return 2*this.PI*this.Radius
    }
}
var Obj1 = new CircleX(10)
console.log("Details of first cicle Object: ")
var Ret = Obj1.AreaOfCicle()
console.log("Area of Circle is : "+Ret)
var Ret = Obj1.Circumference()
console.log("Circumference of Circle is : "+Ret+"\n")

var Obj2 = new CircleX(12.8)
console.log("Details of Seconf cicle Object: ")
var Ret = Obj2.AreaOfCicle()
console.log("Area of Circle is : "+Ret)
var Ret = Obj2.Circumference()
console.log("Circumference of Circle is : "+Ret)