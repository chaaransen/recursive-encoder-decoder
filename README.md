# recursive-encoder-decoder
a base64 recursive encoder and decoder.

Usage:

const base64 = require('./index.js');

let str = "Hello world";

let encodeStr = base64.encodeRecursive(str, 10, 'ascii', true);

# '10' no of iterations of encoding to perform on str String with input in ascii encoding

let decodeStr = base64.decodeRecursive(encodeStr, 10, 'ascii', true));

# '10' no of iterations of decoding to perform on str String to input in ascii encoding

if(str === decodeStr){
console.log("Encoding Decoding in Recursion");
}





