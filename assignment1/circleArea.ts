function CircleArea(radius : number):number
{
    var area : number = 0
    area = 3.14 * radius * radius
    return area
}
var Ret : number = 0
Ret = CircleArea(5)
console.log("Area of circle is : "+Ret)