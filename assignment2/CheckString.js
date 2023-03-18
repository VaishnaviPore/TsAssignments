function chkString(stringValue, findValue) {
    if (stringValue.search(findValue) !== -1) {
        console.log("String contain " + findValue + " in it");
    }
    else
        console.log("String does not contain " + findValue + " in it");
}
var RetValue = "Pune Kothrud Marvellous Infosystem";
var find = "Marvellous";
chkString(RetValue, find);
