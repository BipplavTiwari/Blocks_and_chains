var prompt=require("prompt-sync")();
var crypto=require('crypto');

var strng=prompt("Enter the string: ");
var b="0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";
for (var i = 1; ; i++) {
    var s1=crypto.createHash('sha256').update(strng+i).digest('hex');
    if(s1<=b){
        console.log(i);
        break;
    }
}