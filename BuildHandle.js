"use strict";
exports.__esModule = true;
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
