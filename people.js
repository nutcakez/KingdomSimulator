"use strict";
exports.__esModule = true;
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
