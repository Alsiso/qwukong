//import '@babel/polyfill'
const moduleA = require('./moduleA')
window.onload = function() {
    $('#myDiv').html('3456')
    moduleA.a()
}