var minDeletionSize = function(strs) {
    let columns = strs[0].length;
    let result = 0;
    let arr;
    let c = 0, y = 0;
    
    while (c < columns) {
        arr = [];
        
        for (let x = 0; x < strs.length; x++) {
            arr.push(strs[x].split('')[y]);
        }
        
        const sortedLetters = [...arr].sort();
        arr.join('') === sortedLetters.join('') ? null : result++;
        
        y++;
        c++;
    }
    return result;
};