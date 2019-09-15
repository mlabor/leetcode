var guess = (number) => {
    let pick = 6

    if (number === pick) {
        return 0
    } else if(number < pick) {
        return -1
    } else {
        return 1
    }
}

var getMiddle = (start, end) => {
    return Math.floor((start + end) / 2)
}

var guessNumber = (n) => {
    let start = 0
    let end = n
    let middle = getMiddle(start + end)
    let flag = -1

    while(flag !== 0 && middle !== n && middle !== 0) {
        flag = this.guess(middle)
        console.log(flag, middle)
        if(flag === 1) {
            end = middle
            middle = getMiddle(start + end)
        }

        if (flag === -1) {
            start = middle
            middle = getMiddle(start + end)
        }
    }

    return middle
}