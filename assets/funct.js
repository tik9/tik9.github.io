// console.log('fun 2 js')

function truncate(str) {
    if (str.length <= truncate_cut) {
        return str
    }
    subString = str.substr(0, truncate_cut)
    return subString.substr(0, subString.lastIndexOf(' ')) + '..'
}

function rege(body) {
    reg1 = '<\/?[^>]+(>|$)'
    // reg2 = '&quot;' //"
    reg2 = '&#34;' //"
    reg3 = '&#39;' //'
    reg4 = '&gt;'
    regs = [reg1, reg2, reg3, reg4]
    // body+='"test"'

    for (reg of regs) {
        // var re = new RegExp(reg);
        // body=body.replace('/'+reg+'/', '')
        // body=body.replace('/&quot/', '')
        body=body.replace('/"/', '')
        // body=body.replace(re, '')
        // console.log(body,)
    }
    return body
}

module.exports=rege