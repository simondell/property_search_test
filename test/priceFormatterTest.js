var priceFormatter = require('../lib/priceFormatter');
var test = require('tape');

test('it should add £ to the start of the string', function (t) {
  var value = 2145;
  var result = priceFormatter( value );

  t.equal( result.substr(0, 1), '£' );
  t.end();
});

test('it should separate 1000s with a comma', function (t) {
  t.equal( priceFormatter( 1337 ), '£1,337' );
  t.equal( priceFormatter( 13337 ), '£13,337' );
  t.equal( priceFormatter( 137 ), '£137' );
  t.equal( priceFormatter( 1337337 ), '£1,337,337' );
  t.end();
});
