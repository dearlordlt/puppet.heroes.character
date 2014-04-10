function isNumber(n) {
   return n == parseFloat(n);
}

function isEven(n) {
   return isNumber(n) && (n % 2 == 0);
}
