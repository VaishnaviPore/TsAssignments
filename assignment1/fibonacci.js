function fibonacci(Value) {
    var cnt = 1;
    var nextValue = 0;
    var n1 = 0;
    var n2 = 1;
    for (var cnt_1 = 2; n2 <= Value; cnt_1++) {
        console.log(n2);
        nextValue = n1 + n2;
        n1 = n2;
        n2 = nextValue;
    }
}
var Ret = 21;
fibonacci(21);
