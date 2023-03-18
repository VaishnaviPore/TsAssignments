function SecMaximum(array) {
    var MaxNumber = 0;
    array.sort(function (n1, n2) { return (n1 - n2); });
    MaxNumber = array[array.length - 2];
    return MaxNumber;
}
var ArrayList = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = SecMaximum(ArrayList);
console.log("Second Maximum number is : " + Ret);
