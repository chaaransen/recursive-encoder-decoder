
function encodeRecursive(input, n, print = false) {
    var tempValue = input;
    for (let i = 0; i < n; i++) {

        // String to Base64 conversion
        const buf = Buffer.from(tempValue, 'ascii');
        tempValue = buf.toString('base64');

        if (print) {
            console.log(i + " " + tempValue);
        }
    }

    return tempValue;
}

function decodeRecursive(input, n, print = false) {
    var tempValue = input;

    // Base64 to String conversion
    for (let i = 0; i < n; i++) {

        const buf = Buffer.from(tempValue, 'base64');
        tempValue = buf.toString('ascii');

        if (print) {
            console.log(i + " " + tempValue);
        }
    }

    return tempValue;
}

module.exports.encodeRecursive = encodeRecursive;
module.exports.decodeRecursive = decodeRecursive;