var Circle = /** @class */ (function () {
    function Circle(RadiusValue) {
        this.Radius = RadiusValue;
        this.PI = 3.14;
    }
    Circle.prototype.AreaOfCicle = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var Obj1 = new Circle(10);
console.log("Details of first cicle Object: ");
var Ret = Obj1.AreaOfCicle();
console.log("Area of Circle is : " + Ret + "\n");
var Obj2 = new Circle(12.8);
console.log("Details of Seconf cicle Object: ");
var Ret = Obj2.AreaOfCicle();
console.log("Area of Circle is : " + Ret);
