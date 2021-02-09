function truncate(str) {
    //    console.log('trunc',truncate_cut)
    if (str.length <= truncate_cut) {
        return str
    }
    subString = str.substr(0, truncate_cut)
    return subString.substr(0, subString.lastIndexOf(' ')) + '..'
}

function rege() {
    reg1 = '<\/?[^>]+(>|$)'
    reg2 = '&quot;'
    // '
    reg3 = '&#39;'
    reg4 = '&gt;'
    regs = [reg1, reg2, reg3, reg4]
    for (reg of regs) {
        var re = new RegExp(reg, "g");
        bodyPost.replace(re, '')
        console.log(reg)
    }
}

function datef(timestamp) {

    // console.log('zeit fun', timestamp)
    if (timestamp == undefined) {
        dat = new Date()
    } else {
        dat = new Date(timestamp * 1000)
    }

    dd = dat.getDate()

    mm = dat.getMonth() + 1
    yyyy = dat.getFullYear()

    if (dd < 10) { dd = '0' + dd }

    if (mm < 10) { mm = '0' + mm }

    dat = dd + '/' + mm + '/' + yyyy

    return dat
}

function alter() {
    
        heute_ms = Date.now()
    geburtstag = Date.parse("1978-10-02")
    alter = heute_ms - geburtstag
    msProJahr = 31536000000
    return Math.floor(alter / msProJahr)
}
