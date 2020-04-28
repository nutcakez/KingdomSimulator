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
