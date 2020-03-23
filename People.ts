export class People{
    rank:number;
    currentTask:string="gold";  //currently producing this 

    constructor(rank:number){
        this.rank=rank;
    }

    product():number{
        return this.rank*2;
    }

    changeTask(task:string):void{
        this.currentTask=task;
    }

    levelup():void{
        this.rank++;
    }


}