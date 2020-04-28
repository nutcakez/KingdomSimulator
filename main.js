"use strict";
exports.__esModule = true;
var GameStatus = require("./GameStatus");
var People_1 = require("./People");
var populationHandler_1 = require("./populationHandler");
var map = require("./MapHandler");
var _global = window;
//--------- game status variables
var Peoples = GameStatus.Peoples;
var Gold = GameStatus.Gold;
var Wood = GameStatus.Wood;
var Stone = GameStatus.Stone;
var Food = GameStatus.Food;
//let map=new MapHandler();
_global.changeproduction = function (task) {
    changeproduction(task);
};
_global.tileClick = function (x, y) {
    //ask MapHandler what kind of tile is that
    alert(GameStatus.Wood);
    //based on it return available actions? on
};
//--------- end of game status variables
//--------- init
map.drawMap();
AddNewPeople(10, 10, 10);
AddNewPeople(5, 5, 5);
// for(let i=0;i<500;i++){
//     AddNewPeople(Math.floor(Math.random()*100)+1,Math.floor(Math.random()*100)+1,Math.floor(Math.random()*100)+1)
// }
production();
//--------- end of init
//--------- main functions
//start interval - each interval update the gold status with the gain
function production() {
    var produceionInterval = setInterval(function () {
        for (var i = 0; i < Peoples.length; i++) {
            switch (Peoples[i].currentTask) {
                case "gold":
                    GameStatus.Gold += Peoples[i].produce('gold');
                    document.getElementById("gold").innerHTML = "Current gold: " + GameStatus.Gold.toString();
                    break;
                case "wood":
                    GameStatus.Wood += Peoples[i].produce('wood');
                    document.getElementById('wood').innerHTML = "Current wood: " + GameStatus.Wood.toString();
                    break;
                case "stone":
                    GameStatus.Stone += Peoples[i].produce('stone');
                    break;
                case "food":
                    GameStatus.Food += Peoples[i].produce('food');
                    document.getElementById('food').innerHTML = "Current food: " + GameStatus.Food.toString();
                    break;
                default:
                    console.log(Peoples[i].currentTask + "    couldnt find this kind of task");
                    break;
            }
        }
        populationHandler_1.PopulationHandler.CreatePeople(Peoples);
        console.log(Peoples.length);
    }, 1000);
}
function AddNewPeople(str, dex, int) {
    Peoples.push(new People_1.People(str, int, dex));
}
// create the game table
function drawMap() {
}
// change all ppl task to this:
function changeproduction(task) {
    for (var i = 0; i < Peoples.length; i++) {
        Peoples[i].currentTask = task;
    }
}
//--------- end on main functions
