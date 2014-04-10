/**
 * Global functions and constants goes here
 */

/**
 * Checks is given argument is valid number
 * @param {Type} n
 */
function isNumber(n) {
   return n == parseFloat(n);
}

/**
 * Checks is given argument is even
 * @param {Type} n
 */
function isEven(n) {
   return isNumber(n) && (n % 2 == 0);
}

/**
 * Checks is given argument is odd
 * @param {Type} n
 */
function isOdd(n) {
   return isNumber(n) && (Math.abs(n) % 2 == 1);
}
