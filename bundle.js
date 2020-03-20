(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var People = /** @class */ (function () {
    function People(rank) {
        this.rank = rank;
    }
    People.prototype.product = function () {
        return this.rank * 3;
    };
    return People;
}());
exports.People = People;

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var People_1 = require("./People");
var Peoples = [];
var Gold = 0;
AddNewPeople(1004);
AddNewPeople(2);
var ProductionInterval = setInterval(function () {
    for (var i = 0; i < Peoples.length; i++) {
        Gold += Peoples[i].product();
    }
    document.getElementById("gold").innerHTML = Gold.toString();
}, 1000);
function AddNewPeople(rank) {
    Peoples.push(new People_1.People(rank));
}

},{"./People":1}]},{},[2]);
