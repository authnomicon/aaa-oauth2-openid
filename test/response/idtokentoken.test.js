/* global describe, it */

var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../xom/response/idtokentoken');


describe('response/idtokentoken', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
});
