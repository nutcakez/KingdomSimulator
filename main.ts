import {People} from "./People";

//--------- game status variables
let Peoples:People[]=[];
let Gold:number=0;

//--------- end of game status variables


//--------- init
drawMap();
AddNewPeople(91004);
AddNewPeople(2);
GoldGain();

//--------- end of init







//--------- main functions

//start interval - each interval update the gold status with the gain
function GoldGain(){
    let ProductionInterval=setInterval(function(){
        for(let i=0;i<Peoples.length;i++){
            Gold+=Peoples[i].product();
        }
        document.getElementById("gold").innerHTML="Current gold: "+Gold.toString();
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
            cell.innerHTML=cellindex.toString();
            cellindex++;
            rowelement.appendChild(cell);
        }
        tablenode.appendChild(rowelement);
    }
    document.getElementsByTagName("body")[0].appendChild(tablenode)

}


//--------- end on main functions