var twoSum = function(nums, target) {
    let result = [];

    for (let x = 0; x < nums.length; x++) {
        for (let y = 1+x; y < nums.length; y++) {
            if (nums[x] + nums[y] === target) {
                result.push(nums.indexOf(nums[x]));
                result.push(nums.indexOf(nums[y], y));
            }
        }
    }

    return result;
}