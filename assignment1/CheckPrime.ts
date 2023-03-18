function chkPrime(Value: number): void {
    var cnt: number = 0
    var chk: number = 1

    for (cnt = 2; cnt < Value / 2; cnt++) {

        if (Value % cnt == 0) {
            console.log("It is not prime number")
            chk = 1
            break
        }

    }
    if (chk == 0)
        console.log("It is Prime number")
}
var Ret: number = 25
chkPrime(Ret)