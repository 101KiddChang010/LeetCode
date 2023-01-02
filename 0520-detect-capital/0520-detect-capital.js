/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return word === word.toUpperCase() 
    || word === word.toLowerCase() 
    || word === word.toLowerCase().split(' ').map( e => {
        if (e.length === 0) return e;
        return e[0].toUpperCase() + e.substr(1);
    }).join(' ');
};