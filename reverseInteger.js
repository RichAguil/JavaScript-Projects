var reverse = function(x) {
    var string = x.toString();
    var reversed = [];
    var sign;
    for (var i = 0; i <string.length; i++) {
        reversed[i] = string[i];
    };
    var reversedArray = reversed.reverse();
    if (reversedArray[reversedArray.length - 1] === "-") {
        sign = reversedArray.pop();
    } else {
        sign = 0;
    };
    var concatenation = sign;
    for (var i = 0; i<reversedArray.length; i++) {
        concatenation+=reversedArray[i].toString();
        };
    var number = Number(concatenation);
    if (number > Math.pow(2,31) || number < Math.pow(-2,31)) {
        number = 0;
    };
    return number;
};

//Given a 32-bit signed integer, reverse digits of an integer.

//Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
//For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
