var moveZeroes = function(nums) {
    const zero = nums.filter(x => x===0).length;
    let cond = true, counter = 0;

    while (cond) {
      if (counter === zero)
        cond = false;
      for (let i = 0; i < nums.length-counter; i++) {
        if (nums[i] === 0) {
          nums.splice(i,1);
          nums.push(0);
          break
        }
      }
      counter++;
    }

    return nums;
};