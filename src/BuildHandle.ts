import map =require("./MapHandler");
import gamestatus=require("./GameStatus")

export class BuildHandle{
    static BuildHandle(){

    }

    static TerrainHandler(terraintype:string):Array<string>{
        let actions:Array<string>=[]
        switch (terraintype) {
            case "water":
                actions.push("shipyard","fishingpost","lighthouse")
                break;
            case "rock":
                actions.push("quarry")
                break;
            case "forest":
                actions.push("huntinglodge","woodcutter","forester","herbalist")
                break;
            case "desert":
                actions.push("camelhouse","well")
                break;
            case "clay":
                actions.push("pottery","golemancer")
                break;
            default:
                break;
        }
        return actions
        
    }

    static DrawBuildOptions(buildings:Array<string>){
        document.getElementById("buildingbar").innerHTML="";
        //document.getElementById("buildingbar").innerHTML=buildings.toString();
        buildings.forEach(element => {
            let node=document.createElement("div")
            node.style.cssText="background-color:green;width:50px;height:50px;float:left;padding:10px;margin:40px"
            node.innerHTML=element
            node.onclick=function(){
                BuildHandle.BuildBuilding(element)
            }
            document.getElementById("buildingbar").appendChild(node)

        });
    }

    private static BuildBuilding(building:string){
        //requirement check gold-wood-stone
        if(gamestatus.Gold>30 && gamestatus.Wood>30){
            alert("FELEPULT "+building)
        }
        else
        {
            alert("NEMÉPÜLT")
        }

        //building

    }

}
