/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let a
    let len
    let mdIndex = 0
    a = (Math.abs(x) + '').split('')
    len = a.length

    if (len === 2) {
        mdIndex = 1
    } else if (len % 2) {
        mdIndex = (len - 1) / 2
    } else {
        mdIndex = len / 2
    }

    while(mdIndex < len) {
        let l
        let m = a[mdIndex]
        let n = a[len - (mdIndex + 1)]
        l = m
        m = n
        n = l
        a[mdIndex] = m
        a[len - (mdIndex + 1)] = n
        mdIndex++
    }


    if (x < 0) {
        return 0 - Number(a.join(''))
    }

    return Number(a.join(''))
}