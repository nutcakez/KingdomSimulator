(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var People = /** @class */ (function () {
    function People(rank) {
        this.currentTask = "gold"; //currently producing this 
        this.rank = rank;
    }
    People.prototype.product = function () {
        return this.rank * 2;
    };
    People.prototype.changeTask = function (task) {
        this.currentTask = task;
    };
    People.prototype.levelup = function () {
        this.rank++;
    };
    return People;
}());
exports.People = People;

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var People_1 = require("./People");
var _global = window;
//--------- game status variables
var Peoples = [];
var Gold = 0;
var Wood = 0;
var Stone = 0;
var Food = 0;
_global.changeProduction = function (task) {
    changeProduction(task);
};
//--------- end of game status variables
//--------- init
drawMap();
AddNewPeople(12);
AddNewPeople(2);
Production();
//--------- end of init
//--------- main functions
//start interval - each interval update the gold status with the gain
function Production() {
    var ProductionInterval = setInterval(function () {
        for (var i = 0; i < Peoples.length; i++) {
            switch (Peoples[i].currentTask) {
                case "gold":
                    Gold += Peoples[i].product();
                    document.getElementById("gold").innerHTML = "Current gold: " + Gold.toString();
                    break;
                case "wood":
                    Wood += Peoples[i].product();
                    document.getElementById("wood").innerHTML = "Current wood: " + Wood.toString();
                    break;
                case "stone":
                    Stone += Peoples[i].product();
                    break;
                case "food":
                    Food += Peoples[i].product();
                    document.getElementById("food").innerHTML = "Current food: " + Food.toString();
                    break;
                default:
                    console.log(Peoples[i].currentTask + "    couldnt find this kind of task");
                    break;
            }
        }
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
            //cell.innerHTML=cellindex.toString();
            cellindex++;
            rowelement.appendChild(cell);
        }
        tablenode.appendChild(rowelement);
    }
    document.getElementsByTagName("body")[0].appendChild(tablenode);
}
// change all ppl task to this:
function changeProduction(task) {
    for (var i = 0; i < Peoples.length; i++) {
        Peoples[i].currentTask = task;
    }
    return "current task for ppl is " + task;
}
function test() {
    console.log("worky worky");
}
//--------- end on main functions

},{"./People":1}]},{},[2]);
