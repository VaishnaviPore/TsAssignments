function chkPrime(Value) {
    var cnt = 0;
    var chk = 1;
    for (cnt = 2; cnt < Value / 2; cnt++) {
        console.log(cnt, Value / 2, Value % cnt);
        if (Value % cnt == 0) {
            console.log("It is not prime number");
            chk = 1;
            break;
        }
    }
    if (chk == 0)
        console.log("It is Prime number");
}
var Ret = 25;
chkPrime(Ret);
