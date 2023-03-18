function DisplayFactor(No) {
    var cnt = 1;
    for (cnt = 1; cnt < No; cnt++) {
        if (No % cnt == 0) {
            console.log(cnt);
        }
    }
}
var Num = 20;
DisplayFactor(Num);
