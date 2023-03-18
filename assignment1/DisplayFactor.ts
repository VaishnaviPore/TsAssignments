function DisplayFactor(No: number): void {
    var cnt: number = 1
    for (cnt = 1; cnt < No; cnt++) {
        if (No % cnt == 0) {
            console.log(cnt)
        }
    }
}

var Num: number = 20
DisplayFactor(Num)