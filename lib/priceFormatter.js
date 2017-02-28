function priceFormatter ( value ) {
  var price = value
    .toString()
    .split('')
    .reverse()
    .reduce( function thousands ( a, e, i ) {
      var end = a.length - 1;
      if( i % 3 === 0 ) { a.push(e); }
      else a[end] = e + a[end];

      return a;
    }, [] )
    .reverse()
    .join(',');

  return '£' + price;
}

module.exports = priceFormatter;
