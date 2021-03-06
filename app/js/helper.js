/**
 * Global functions and constants goes here
 */

/**
 * Checks is given argument is valid number
 * @param {int} n
 */
function isNumber(n) {
   return n == parseFloat(n);
}

/**
 * Checks is given argument is valid age
 * @param {int} n
 */
function isIntegerAge(n) {
    return isNumber(n) && n>0 && n<=Infinity && n%1===0;
}

/**
 * Checks is given argument is even
 * @param {int} n
 */
function isEven(n) {
   return isNumber(n) && (n % 2 == 0);
}

/**
 * Checks is given argument is odd
 * @param {int} n
 */
function isOdd(n) {
   return isNumber(n) && (Math.abs(n) % 2 == 1);
}

/**
 * Refreshes points totall in header
 */
function refreshPoints () {
    if(isNumber(cg_tpl.points) && isNumber(ncg_tpl.points)) {
        var _pointsTotall = parseInt(cg_tpl.points) + parseInt(ncg_tpl.points);
        $("#pointsTotallLabel").html(_pointsTotall);
        console.log("Points spent = " + _pointsTotall);
    } else {
        $("#pointsTotallLabel").html("None");
        console.log("Points spent = None");
    }
}

/**
* Hanlebars helper for advanced if operations
*/
Handlebars.registerHelper("ifCond",function(v1,operator,v2,options) {
    switch (operator) {
        case "==":
            return (v1==v2)?options.fn(this):options.inverse(this);

        case "!=":
            return (v1!=v2)?options.fn(this):options.inverse(this);

        case "===":
            return (v1===v2)?options.fn(this):options.inverse(this);

        case "!==":
            return (v1!==v2)?options.fn(this):options.inverse(this);

        case "&&":
            return (v1&&v2)?options.fn(this):options.inverse(this);

        case "||":
            return (v1||v2)?options.fn(this):options.inverse(this);

        case "<":
            return (v1<v2)?options.fn(this):options.inverse(this);

        case "<=":
            return (v1<=v2)?options.fn(this):options.inverse(this);

        case ">":
            return (v1>v2)?options.fn(this):options.inverse(this);

        case ">=":
         return (v1>=v2)?options.fn(this):options.inverse(this);

        default:
            return eval(""+v1+operator+v2)?options.fn(this):options.inverse(this);
    }
});

/**
* Displays alert
* @param {str} _header
* @param {str} _message
*/
function phAlert(_header, _message) {
    $("#global-alert").show();
    $("#alert-header").html(_header);
    $("#alert-message").html(_message);
}

/**
* Checks if web storage is available
*/
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
