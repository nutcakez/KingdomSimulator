import gamestatus=require("./GameStatus")
export class People{
    strength:number;
    inteligence:number;
    dexterity:number;
    sex:string;
    currentTask:string="gold";  //currently producing this 
    taken:boolean=false;
    

    constructor(strenght:number,inteligence:number,dexterity:number){
        this.strength=strenght;
        this.inteligence=inteligence;
        this.dexterity=dexterity;
        if(Math.random() * 10<5){
            this.sex="female"
        }
        else
        {
            this.sex="male"
        }
    }

    produce(task:string):number{
        switch (task) {
            case 'wood':
                return this.strength*0.7+this.dexterity*0.3;

            case 'gold':
                return this.strength*0.5+this.dexterity*0.5;

            case 'stone':
                return this.strength*0.9+this.dexterity*0.1;

            case 'food':
                return this.strength*0.2+this.dexterity*0.8;
            default:
                return 0;
        }
    }

    changeTask(task:string):void{
        this.currentTask=task;
    }
}