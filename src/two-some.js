/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let first = -1,
        last = 0,
        arr = nums.concat()
    nums.some((element) => {
        first++
        let result = target - element
        arr.shift()
        let index = arr.indexOf(result)
        last = index + first + 1
        return index > -1
    })
    return [first, last]
};