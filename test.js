const base64 = require('./index.js');

let str = "Hello world";

let encodeStr = base64.encodeRecursive(str, 10, true);

console.log(base64.decodeRecursive(encodeStr, 10, true));