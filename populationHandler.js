"use strict";
exports.__esModule = true;
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
