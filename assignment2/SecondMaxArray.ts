function SecMaximum(array : number[]):number
{   
    let MaxNumber : number = 0
    array.sort((n1, n2)=>(n1 - n2))
    MaxNumber = array[array.length-2]
    return MaxNumber
}

var ArrayList : number[] = [23, 89, 6, 29, 56, 45, 77, 32]
var Ret : number = 0
Ret = SecMaximum(ArrayList)
console.log("Second Maximum number is : "+ Ret)
