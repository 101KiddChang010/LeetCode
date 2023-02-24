var twoSum = function(nums, target) {
    let hash = {};

    for (let x = 0; x < nums.length; x++) {
        const complement = target - nums[x];
        if (hash.hasOwnProperty(complement))
            return [hash[complement], x];
        hash[nums[x]] = x;
    }

    return [];
}