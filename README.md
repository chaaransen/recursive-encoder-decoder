# recursive-encoder-decoder

a base64 recursive encoder and decoder.

### Installation
Run the following command inside your project folder.
```sh
$ npm install recursive-encoder-decoder
```

### Usage:

```javascript
const base64 = require('recursive-encoder-decoder');
let str = "Hello world";

let encodeStr = base64.encodeRecursive(str, 10, 'ascii', true);
let decodeStr = base64.decodeRecursive(encodeStr, 10, 'ascii', true));

if(str === decodeStr){
console.log("Encoding Decoding in Recursion");
}
```
> '10' is the no of iterations of encoding/decoding to perform on String 'str' with input/output in 'ascii' encoding


License
----

MIT

