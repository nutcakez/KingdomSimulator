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
