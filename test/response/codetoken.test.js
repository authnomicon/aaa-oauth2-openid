/* global describe, it */

var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../xom/response/codetoken');


describe('response/codetoken', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
});
