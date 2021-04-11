
const path = require('path')

// console.log('In util', path.basename(__filename), module)

exports.toDateFromIso = function (date) {
    const date_ = date.split('T')[0]
    const yyyy = date_.split('-')[0]
    const mm = date_.split('-')[1]
    const dd = date_.split('-')[2]
    const daObj = new Date(yyyy, mm, dd)
    const daDe = dd + '.' + mm + '.' + yyyy
    return [daDe, daObj]
}

exports.toDateFromSeconds = function (date) {
    const daObj = new Date(date * 1000)
    console.log('daobj',daObj)

    const dd = ('0' + daObj.getDate()).slice(-2)
    const mm = ('0' + (daObj.getMonth() + 1)).slice(-2)
    const yyyy = daObj.getFullYear()
    const daDe = dd + '.' + mm + '.' + yyyy
    // return [da]
    return [daDe, daObj]
}
