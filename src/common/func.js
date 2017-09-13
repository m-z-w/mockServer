// 获取一定范围的随机数
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
// 获取整数随机数（包括边界）
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 各位数字添加0
function addZero (data) {
    return (data < 10 ? ('0' + data) : data);
}
// 格式化日期为 - 格式
function format (one) {
    var date;
    if (one) {
        date = new Date(one);
    } else {
        date = new Date();
    }
    return [date.getFullYear(), addZero(date.getMonth() + 1), date.getDate()].join('-');
}

module.exports = {
    getRandom: getRandom,
    getRandomInt: getRandomInt,
    addZero: addZero,
    format: format
}