var rsa=require("crypto");
var fs=require("fs");

const { generateKeyPairSync } = require('crypto'); 
const { publicKey, privateKey } = generateKeyPairSync('rsa', 
{   modulusLength: 2048,    
    publicKeyEncoding: {
      type: 'spki',       
      format: 'pem'   
    },   
    privateKeyEncoding: {
      type: 'pkcs8',     
      format: 'pem',  
  } 
});
fs.openSync("./public.pem","w");
fs.writeFileSync("./public.pem",publicKey,"utf8"); 
fs.openSync("./private.pem","w");
fs.writeFileSync("./private.pem",privateKey,"utf8");
