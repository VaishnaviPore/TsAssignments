function maxFromThree(No1: number, No2: number, No3: number): number {
    var Max: number = 0
    if (No1 > No2 && No1 > No3) {
        Max = No1
    }
    else if (No2 > No1 && No2 > No3)
        Max = No2
    else
        Max = No3
    return Max
}
var Ret: number = 0
Ret = maxFromThree(23, 89, 6)
console.log("Maximum no is: " + Ret)