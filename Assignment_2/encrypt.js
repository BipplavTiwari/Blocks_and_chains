var crypto = require('crypto'); 
var fs=require("fs");
var prompt = require('prompt-sync')();

const path_private=prompt("Enter the path to private key: ");
//const path_private="./private.pem";
var privateKey=fs.readFileSync(path_private,"utf8");

const myData=prompt("Enter the data you want to encrypt: ");

const signature = crypto.sign("sha256", Buffer.from(myData), {
	key: privateKey,
	padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
});
//const mySign=signature;
const mySign=signature.toString("base64");
fs.openSync("./encrypted.txt","w");
fs.writeFileSync("./encrypted.txt",mySign,"utf8");