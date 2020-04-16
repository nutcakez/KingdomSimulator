class MapHandler{
    maptiles:Array<Array<number>>=[];

    constructor(){
        for(let i=0;i<5;i++){
            let temparray=[];
            for(let j=0;j<5;j++){
                temparray.push(Math.floor((Math.random()*4))+1)
            }
            this.maptiles.push(temparray)
        }
        console.log(this.maptiles)
    }
    //
    drawMap(){
        let tablenode=document.createElement("table");
        let cellindex:number=0;
    
        let rownumber:number=5;
        let columnnumber:number=5;
    
        for(let i=0;i<rownumber;i++){
            let rowelement=document.createElement("tr")
            for(let o=0;o<columnnumber;o++){
                let cell=document.createElement("th");
                switch (this.maptiles[i][o].toString()) {
                    case "1":
                        cell.style.cssText="background-color:blue";
                        cell.onclick = function () {
                            alert("this is water")
                        };
                        break;
                    case "2":
                        cell.style.cssText="background-color:brown";
                        cell.onclick = function () {
                            alert("this is ground")
                        };
                        break;
                    case "3":
                        cell.style.cssText="background-color:gray";
                        cell.onclick = function () {
                            alert("this is stone")
                        };
                        break;
                    case "4":
                        cell.style.cssText="background-color:yellow";
                        cell.onclick = function () {
                            alert("this is sand")
                        };
                        break;
                    default:
                        break;
                }
                
                cell.setAttribute("id","cell"+cellindex);
                cell.innerHTML=this.maptiles[i][o].toString();
                cellindex++;
                rowelement.appendChild(cell);
            }
            tablenode.appendChild(rowelement);
        }
        document.getElementsByTagName("body")[0].appendChild(tablenode)
    }

    tileFree(x:number,y:number):boolean{
        if(this.maptiles[x][y]==1){
            return true;
        }
        else
        {
            return false
        }
    }


}
export=new MapHandler();