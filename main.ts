import {People} from "./People";

let Peoples:People[]=[];
let Gold:number=0;
AddNewPeople(1004);
AddNewPeople(2);
let ProductionInterval=setInterval(function(){
    for(let i=0;i<Peoples.length;i++){
        Gold+=Peoples[i].product();
    }
    document.getElementById("gold").innerHTML=Gold.toString();
},1000)

function AddNewPeople(rank){
    Peoples.push(new People(rank))
}