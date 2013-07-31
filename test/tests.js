describe('next-sibling', function () {

  var assert = require('assert')
    , next = require('next-sibling')
    , div = document.getElementById('one');

  it('should return the next sibling', function () {
    assert('two' === next(div).id);
  });

  it('should filter by a selector', function () {
    assert('three' === next(div, 'span').id);
  });

  it('should return null on only child', function () {
    assert(null === next(document.body));
  });

});