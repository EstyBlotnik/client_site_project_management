parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GZ5R":[function(require,module,exports) {
var e=document.getElementById("username"),t=document.getElementById("password"),n=document.getElementById("login-btn"),a=document.getElementById("error-msg");n.addEventListener("click",function(n){n.preventDefault(),""===e.value||""===t.value?a.textContent="Please enter both username and password":e.value.length<4||e.value.length>20?a.textContent="Username must be between 4 and 20 characters":t.value.length<6||t.value.length>20?a.textContent="Password must be between 6 and 20 characters":window.location.href="dashboard.html"});
},{}]},{},["GZ5R"], null)
//# sourceMappingURL=/log_in.b5963b61.js.map