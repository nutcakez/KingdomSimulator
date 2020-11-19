import { Building } from "./Building";
import MapHandler =require("./MapHandler");

export class City{
    name:string
    locationX:number
    locationY:number

    buildings:Building[]=[];


    constructor(name:string,X:number,Y:number){
        this.name=name;
        this.locationX=X;
        this.locationY=Y;
    }

    NewBuilding(building:Building){
        this.buildings.push(building)
        alert(this.buildings.length)
    }


}