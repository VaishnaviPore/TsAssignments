function Summation(Array) {
    var Addition = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Array.length; cnt++) {
        Addition = Addition + Array[cnt];
    }
    return Addition;
}
var ArrayList = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Summation(ArrayList);
console.log("Addition is : " + Ret);
