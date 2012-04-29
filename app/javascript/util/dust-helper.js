(function (dust) {

  dust.filters.currency = function (num) {
    num = isNaN(num) || num === '' || num === null ? 0.00 : num;
    return parseFloat(num).toFixed(2);
  };

}(dust));
