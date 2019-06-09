let numberTo2 = function (number) {
    var value = parseInt(number).toString(2)
    var l = value.length;    //获取要格式化数字的长度，如二进制1的话长度为1
    if(l < 32){     //补全位数 0000，这里我要显示4位
        for(var i = 0; i < 32-l; i++) {
            value = "0" + value;     //不够的就在前面补0
        }
    }
	return value
}

let arr = [1, 2, 3, 4, 1, 3, 4, 5]

var r = 0

arr.forEach((item) => {
    r ^= item
})

console.log(r)