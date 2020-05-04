
function encodeRecursive(input, noOfRecursions, encoding = 'ascii', print = false) {
    var tempValue = input;
    for (let i = 0; i < noOfRecursions; i++) {

        // String to Base64 conversion
        const buf = Buffer.from(tempValue, encoding);
        tempValue = buf.toString('base64');

        if (print) {
            console.log(i + " " + tempValue);
        }
    }

    return tempValue;
}

function decodeRecursive(input, noOfRecursions, encoding = 'ascii', print = false) {
    var tempValue = input;

    // Base64 to String conversion
    for (let i = 0; i < noOfRecursions; i++) {

        const buf = Buffer.from(tempValue, 'base64');
        tempValue = buf.toString(encoding);

        if (print) {
            console.log(i + " " + tempValue);
        }
    }

    return tempValue;
}

module.exports.encodeRecursive = encodeRecursive;
module.exports.decodeRecursive = decodeRecursive;