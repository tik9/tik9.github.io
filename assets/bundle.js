(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
 //console.log('fun 1 js')

function truncate(str) {
    if (str.length <= truncate_cut) {
        return str
    }
    subString = str.substr(0, truncate_cut)
    return subString.substr(0, subString.lastIndexOf(' ')) + '..'
}

function rege(body) {
    reg1 = /<\/?(.*?)>/g
    // reg2 = '&quot;' //"
    reg2=/&lt;(.*?)&gt;/g
    reg3=''
    regs = [reg1, reg2,reg3]

    for (reg of regs) {
        // var re = new RegExp(reg);
        // console.log(body,reg,1)
        body=body.replace(reg, '')
    }
    return body
}

module.exports=rege

},{}]},{},[1]);
