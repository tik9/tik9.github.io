(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
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

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
