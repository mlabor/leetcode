/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xStr = String(x)
    let len = xStr.length
    let i = 0
    let j = 0
    if (len <= 1) {
        return true
    } else if (len % 2) {
        i = (len - 1) / 2 - 1
        j = (len - 1) / 2 + 1
    } else {
        i = len / 2 - 1
        j = len / 2
    }

    while(i >= 0) {
        if (xStr[i] !== xStr[j]) {
            break
        }
        i--
        j++
    }

    return !(i + 1)
}