function chkString(stringValue: string, findValue: string): void {

    if (stringValue.search(findValue) !== -1) {

        console.log("String contain " + findValue + " in it")
    }
    else console.log("String does not contain " + findValue + " in it")
}

var RetValue: string = "Pune Kothrud Marvellous Infosystem"
var find: string = "Marvellous"
chkString(RetValue, find)
