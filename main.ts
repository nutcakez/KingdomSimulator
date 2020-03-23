import {People} from "./People";
const _global=window as any;

//--------- game status variables
let Peoples:People[]=[];
let Gold:number=0;
let Wood:number=0;
let Stone:number=0;
let Food:number=0;

_global.changeProduction=function(task:string){
    changeProduction(task);
}

//--------- end of game status variables




//--------- init
drawMap();
AddNewPeople(12);
AddNewPeople(2);
Production();
//--------- end of init







//--------- main functions

//start interval - each interval update the gold status with the gain
function Production(){
    let ProductionInterval=setInterval(function(){
        for(let i=0;i<Peoples.length;i++){
            switch (Peoples[i].currentTask) {
                case "gold":
                    Gold+=Peoples[i].product();
                    document.getElementById("gold").innerHTML="Current gold: "+Gold.toString();
                    break;
                case "wood":
                    Wood+=Peoples[i].product();
                    document.getElementById("wood").innerHTML="Current wood: "+Wood.toString();
                    break;
                case "stone":
                    Stone+=Peoples[i].product();
                    break;
                case "food":
                    Food+=Peoples[i].product();
                    document.getElementById("food").innerHTML="Current food: "+Food.toString();
                    break;
                default:
                    console.log(Peoples[i].currentTask+"    couldnt find this kind of task")
                    break;
            }
        }
        
    },1000)
}

function AddNewPeople(rank:number):void{
    Peoples.push(new People(rank))
}

// create the game table
function drawMap():void{
    let tablenode=document.createElement("table");
    let cellindex:number=0;

    let rownumber:number=5;
    let columnnumber:number=5;

    for(let i=0;i<rownumber;i++){
        let rowelement=document.createElement("tr")
        for(let o=0;o<columnnumber;o++){
            let cell=document.createElement("th");
            cell.setAttribute("id","cell"+cellindex);
            //cell.innerHTML=cellindex.toString();
            cellindex++;
            rowelement.appendChild(cell);
        }
        tablenode.appendChild(rowelement);
    }
    document.getElementsByTagName("body")[0].appendChild(tablenode)

}

// change all ppl task to this:
function changeProduction(task:string):void{
    for (let i = 0; i < Peoples.length; i++) {
        Peoples[i].currentTask=task;
    }
}

//--------- end on main functions

