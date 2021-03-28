//console.log('fun 1 js')


global.rege = function(body) {
    reg1 = /<\/?(.*?)>/g
    // reg2 = '&quot;' //"
    reg2 = /&lt;(.*?)&gt;/g
    reg3 = ''
    regs = [reg1, reg2, reg3]

    for (reg of regs) {
        // var re = new RegExp(reg);
        // console.log(body,reg,1)
        body = body.replace(reg, '')
    }
    return body
}

module.exports = rege
