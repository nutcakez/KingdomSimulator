(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gamestatus = require("./GameStatus");
var BuildHandle = /** @class */ (function () {
    function BuildHandle() {
    }
    BuildHandle.BuildHandle = function () {
    };
    BuildHandle.TerrainHandler = function (terraintype) {
        var actions = [];
        switch (terraintype) {
            case "water":
                actions.push("shipyard", "fishingpost", "lighthouse");
                break;
            case "rock":
                actions.push("quarry");
                break;
            case "forest":
                actions.push("huntinglodge", "woodcutter", "forester", "herbalist");
                break;
            case "desert":
                actions.push("camelhouse", "well");
                break;
            case "clay":
                actions.push("pottery", "golemancer");
                break;
            default:
                break;
        }
        return actions;
    };
    BuildHandle.DrawBuildOptions = function (buildings) {
        document.getElementById("buildingbar").innerHTML = "";
        //document.getElementById("buildingbar").innerHTML=buildings.toString();
        buildings.forEach(function (element) {
            var node = document.createElement("div");
            node.style.cssText = "background-color:green;width:50px;height:50px;float:left;padding:10px;margin:40px";
            node.innerHTML = element;
            node.onclick = function () {
                BuildHandle.BuildBuilding(element);
            };
            document.getElementById("buildingbar").appendChild(node);
        });
    };
    BuildHandle.BuildBuilding = function (building) {
        //requirement check gold-wood-stone
        if (gamestatus.Gold > 30 && gamestatus.Wood > 30) {
            alert("FELEPULT " + building);
        }
        else {
            alert("NEMÉPÜLT");
        }
        //building
    };
    return BuildHandle;
}());
exports.BuildHandle = BuildHandle;

},{"./GameStatus":2}],2:[function(require,module,exports){
"use strict";
var GameStatus = /** @class */ (function () {
    function GameStatus() {
        this.Peoples = [];
        this.Gold = 0;
        this.Wood = 0;
        this.Stone = 0;
        this.Food = 0;
    }
    return GameStatus;
}());
module.exports = new GameStatus();

},{}],3:[function(require,module,exports){
"use strict";
require("./BuildHandle");
var BuildHandle_1 = require("./BuildHandle");
var MapHandler = /** @class */ (function () {
    function MapHandler() {
        this.maptiles = [];
        for (var i = 0; i < 5; i++) {
            var temparray = [];
            for (var j = 0; j < 5; j++) {
                temparray.push(Math.floor((Math.random() * 4)) + 1);
            }
            this.maptiles.push(temparray);
        }
        console.log(this.maptiles);
    }
    //
    MapHandler.prototype.drawMap = function () {
        var tablenode = document.createElement("table");
        var cellindex = 0;
        var rownumber = 5;
        var columnnumber = 5;
        for (var i = 0; i < rownumber; i++) {
            var rowelement = document.createElement("tr");
            for (var o = 0; o < columnnumber; o++) {
                var cell = document.createElement("th");
                switch (this.maptiles[i][o].toString()) {
                    case "1":
                        cell.style.cssText = "background-color:blue";
                        cell.onclick = function () {
                            alert(BuildHandle_1.BuildHandle.TerrainHandler("water"));
                            BuildHandle_1.BuildHandle.DrawBuildOptions(BuildHandle_1.BuildHandle.TerrainHandler("water"));
                        };
                        break;
                    case "2":
                        cell.style.cssText = "background-color:brown";
                        cell.onclick = function () {
                            alert(BuildHandle_1.BuildHandle.TerrainHandler("clay"));
                            BuildHandle_1.BuildHandle.DrawBuildOptions(BuildHandle_1.BuildHandle.TerrainHandler("clay"));
                        };
                        break;
                    case "3":
                        cell.style.cssText = "background-color:gray";
                        cell.onclick = function () {
                            alert(BuildHandle_1.BuildHandle.TerrainHandler("rock"));
                            BuildHandle_1.BuildHandle.DrawBuildOptions(BuildHandle_1.BuildHandle.TerrainHandler("rock"));
                        };
                        break;
                    case "4":
                        cell.style.cssText = "background-color:yellow";
                        cell.onclick = function () {
                            alert(BuildHandle_1.BuildHandle.TerrainHandler("desert"));
                            BuildHandle_1.BuildHandle.DrawBuildOptions(BuildHandle_1.BuildHandle.TerrainHandler("desert"));
                        };
                        break;
                    default:
                        break;
                }
                cell.setAttribute("id", "cell" + cellindex);
                cell.innerHTML = this.maptiles[i][o].toString();
                cellindex++;
                rowelement.appendChild(cell);
            }
            tablenode.appendChild(rowelement);
        }
        document.getElementsByTagName("body")[0].appendChild(tablenode);
    };
    MapHandler.prototype.tileFree = function (x, y) {
        if (this.maptiles[x][y] == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    return MapHandler;
}());
module.exports = new MapHandler();

},{"./BuildHandle":1}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People = /** @class */ (function () {
    function People(strenght, inteligence, dexterity) {
        this.currentTask = "gold"; //currently producing this 
        this.taken = false;
        this.strength = strenght;
        this.inteligence = inteligence;
        this.dexterity = dexterity;
        if (Math.random() * 10 < 5) {
            this.sex = "female";
        }
        else {
            this.sex = "male";
        }
    }
    People.prototype.produce = function (task) {
        switch (task) {
            case 'wood':
                return this.strength * 0.7 + this.dexterity * 0.3;
            case 'gold':
                return this.strength * 0.5 + this.dexterity * 0.5;
            case 'stone':
                return this.strength * 0.9 + this.dexterity * 0.1;
            case 'food':
                return this.strength * 0.2 + this.dexterity * 0.8;
            default:
                return 0;
        }
    };
    People.prototype.changeTask = function (task) {
        this.currentTask = task;
    };
    return People;
}());
exports.People = People;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

},{"./GameStatus":2,"./MapHandler":3,"./People":4,"./populationHandler":6}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("./People");
var PopulationHandler = /** @class */ (function () {
    function PopulationHandler() {
    }
    PopulationHandler.CreatePeople = function (peoples) {
        for (var i = 0; i < peoples.length; i++) {
            if (peoples[i].taken == false && Math.floor(Math.random() * 10) < 3) {
                var counter = 0;
                while (counter < 5) {
                    counter++;
                    var randomnumber = Math.floor(Math.random() * peoples.length);
                    if (peoples[randomnumber].sex != peoples[i].sex && peoples[randomnumber].taken == false) {
                        peoples[i].taken = true;
                        peoples[randomnumber].taken = true;
                        for (var l = 0; l < Math.floor(Math.random() * 3) + 1; l++) {
                            peoples.push(this.newborn(peoples[i], peoples[randomnumber]));
                        }
                        console.log(peoples.length);
                        break;
                    }
                }
            }
        }
    };
    PopulationHandler.newborn = function (parent1, parent2) {
        var kidStr = (((parent1.strength + parent2.strength) / 2) + Math.floor(Math.random() * 10) - 5);
        var kidDex = (((parent1.dexterity + parent2.dexterity) / 2) + Math.floor(Math.random() * 10) - 5);
        var kidInt = (((parent1.inteligence + parent2.inteligence) / 2) + Math.floor(Math.random() * 10) - 5);
        var newkid = new People_1.People(kidStr, kidInt, kidDex);
        return newkid;
    };
    return PopulationHandler;
}());
exports.PopulationHandler = PopulationHandler;

},{"./People":4}]},{},[5]);
