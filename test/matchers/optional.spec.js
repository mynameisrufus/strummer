require('../../lib/strummer');
var optional = require('../../lib/matchers/optional');
var string   = require('../../lib/matchers/string');

describe('optional Matcher', function() {

  it('should set the optional flag', function() {
    var m = new optional(new string());
    m.should.have.property('optional', true);
  });

  it('should call the wrapped matcher', function() {
    var m = new optional(new string());
    m.match(123).should.have.error('should be a string');
  });

  it('skips null values because of the base Matcher class', function() {
    var m = new optional(new string());
    m.match(null).should.not.have.error();
  });

  it('compiles the wrapped matcher', function() {
    var m = new optional('string');
    m.match(123).should.have.error('should be a string');
  });

});
