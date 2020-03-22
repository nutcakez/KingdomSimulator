(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var People = /** @class */ (function () {
    function People(rank) {
        this.rank = rank;
    }
    People.prototype.product = function () {
        return this.rank * 2;
    };
    return People;
}());
exports.People = People;

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var People_1 = require("./People");
//--------- game status variables
var Peoples = [];
var Gold = 0;
//--------- end of game status variables
//--------- init
drawMap();
AddNewPeople(1004);
AddNewPeople(2);
GoldGain();
//--------- end of init
//--------- main functions
//start interval - each interval update the gold status with the gain
function GoldGain() {
    var ProductionInterval = setInterval(function () {
        for (var i = 0; i < Peoples.length; i++) {
            Gold += Peoples[i].product();
        }
        document.getElementById("gold").innerHTML = "Current gold: " + Gold.toString();
    }, 1000);
}
function AddNewPeople(rank) {
    Peoples.push(new People_1.People(rank));
}
// create the game table
function drawMap() {
    var tablenode = document.createElement("table");
    var cellindex = 0;
    var rownumber = 5;
    var columnnumber = 5;
    for (var i = 0; i < rownumber; i++) {
        var rowelement = document.createElement("tr");
        for (var o = 0; o < columnnumber; o++) {
            var cell = document.createElement("th");
            cell.setAttribute("id", "cell" + cellindex);
            cell.innerHTML = cellindex.toString();
            cellindex++;
            rowelement.appendChild(cell);
        }
        tablenode.appendChild(rowelement);
    }
    document.getElementsByTagName("body")[0].appendChild(tablenode);
}
//--------- end on main functions

},{"./People":1}]},{},[2]);
