const assert = require('assert');
const base64 = require('../index.js');

describe('base64 tests', () => {
    it('Test - Encoding recursive', () => {
        assert.equal('VTBkV2MySkhPR2RrTWpsNVlrZFJQUT09', base64.encodeRecursive('Hello world', 3, 'ascii', false));
    });
    it('Test - Decoding recursive', () => {
        assert.equal('Hello world', base64.decodeRecursive('VTBkV2MySkhPR2RrTWpsNVlrZFJQUT09', 3, 'ascii', false));
    });
});