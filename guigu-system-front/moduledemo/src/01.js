//定义两个方法
function sum(a,b) {
    return a+b
}

function sub(m,n) {
    return m-n
}

//设置哪些方法可以被其他js文件调用
module.exports = {
    sum,
    sub
}
