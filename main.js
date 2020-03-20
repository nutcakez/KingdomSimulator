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
