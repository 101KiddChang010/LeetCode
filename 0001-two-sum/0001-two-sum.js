var twoSum = function(nums, target) {
    for (let x = 0; x < nums.length; x++) {
        for (let y = 1; y < nums.length; y++) {
            if (nums[x] != nums[y] && nums[x]+nums[y] == target) {                      
                if (nums.indexOf(nums[x]) != nums.indexOf(nums[y])) 
                    return [nums.indexOf(nums[x]), nums.indexOf(nums[y])];

                const one = nums.indexOf(nums[x]);
                nums[one] = 0;
                const two = nums.indexOf(nums[y]);
                return [one, two];
            }

            if (nums[x] === nums[y] && nums[x]+nums[y] == target) 
                    if (x !== y) 
                        return [nums.indexOf(nums[x]), y];
        }
    }
};