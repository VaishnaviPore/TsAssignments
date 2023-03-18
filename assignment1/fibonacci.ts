function fibonacci(Value : number): void{
    var cnt : number = 1
    var nextValue : number = 0
    var n1 : number = 0
    var n2 : number = 1
    for (let cnt = 2; n2 <= Value; cnt++)
    {
       console.log(n2)
       nextValue = n1 + n2
       n1 = n2
       n2 = nextValue
    }
}
var Ret : number = 21
fibonacci(21)