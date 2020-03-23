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
