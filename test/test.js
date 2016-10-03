var assert = require('assert');
var fizzbuzz = require('../');

describe('fizzbuzz', function() {
  it('returns unicode nepali when passed a romanized word', function() {
    var actual=fizzbuzz('saurabh');
    var expected='सौरभ';
    assert.equal(actual,expected);
  });
});
