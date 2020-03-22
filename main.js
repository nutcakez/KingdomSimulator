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
