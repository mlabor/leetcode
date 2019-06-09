/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str
    let index = 0
    let prefix

    if (strs.length <= 1) {
        return strs[0] || ''
    }

    strs.sort((a, b) => {
        return a.length - b.length
    })

    str = strs[0]
    strs.shift()

    while(index <= str.length) {
        prefix = str.slice(0, index)
        let notIn = strs.filter((elem) => {
            return elem.indexOf(prefix) !== 0
        })

        if (notIn.length > 0) {
			prefix = str.slice(0, index - 1)
            break
        }

        index++
    }

    return prefix
}