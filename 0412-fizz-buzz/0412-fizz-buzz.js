/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];

    for (let x = 1; x <= n; x++) {
        if (x % 5 === 0 && x % 3 === 0) {
            answer.push("FizzBuzz");
        } else if (x % 5 === 0) {
            answer.push("Buzz");
        } else if (x % 3 == 0) {
            answer.push("Fizz");
        }  else {
            answer.push(x.toString());
        }
    }
    return answer;
};