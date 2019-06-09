/**
 * @param {string} s
 * @return {number}
 */

// 滑动窗口算法
var lengthOfLongestSubstring = function(s) {
    let i=0
    let j = 0
    let len = 0
    let word = ''
    while(j < s.length) {
        word = s[j]
        subStr = s.slice(i, j+1)
        if (subStr.indexOf(word) !== subStr.lastIndexOf(word)) {
            i++
        } else {
            if (len < subStr.length) {
                len = subStr.length
            }
            j++
        }
    }

    return len
}