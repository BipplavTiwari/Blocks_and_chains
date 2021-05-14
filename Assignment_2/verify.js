var crypto = require('crypto'); 
var fs=require("fs");
var prompt = require('prompt-sync')();

const path_public=prompt("Enter the path to public key: ");
//const path_public="./public.pem";
var publicKey=fs.readFileSync(path_public,"utf8");

const myData=prompt("Enter the unencrypted data: ");

const path_Encrypt=prompt("Enter the path to encrypted data: ");
//const path_Encrypted="./encrypted.txt";
var mySign=fs.readFileSync(path_Encrypt,"utf8");

const isVerified = crypto.verify(
	"sha256",
	Buffer.from(myData),
	{
		key: publicKey,
		padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
	},
	Buffer.from(mySign,'base64')
);

if(isVerified){
    console.log("Signature verified!");
}
else{
    console.log("Verification failed");
}