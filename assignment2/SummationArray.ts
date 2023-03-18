function Summation(Array : number[]):number
{
    var Addition : number = 0
    var cnt : number = 0
    for(cnt = 0; cnt<Array.length; cnt++)
    {
        Addition = Addition + Array[cnt]
    }
    return Addition
}

var ArrayList : number[] = [23, 6, 7, 4, 5, 7]
var Ret : number = 0
Ret = Summation(ArrayList)
console.log("Addition is : "+ Ret)