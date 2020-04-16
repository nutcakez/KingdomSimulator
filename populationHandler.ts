import {People} from "./People";

export class PopulationHandler{
    static CreatePeople(peoples:People[]){
        for(let i=0;i<peoples.length;i++){
            if(peoples[i].taken==false && Math.floor(Math.random()*10)<3){
                let counter=0;
                while(counter<5){
                    counter++;
                    let randomnumber=Math.floor(Math.random()*peoples.length);
                    if(peoples[randomnumber].sex!=peoples[i].sex && peoples[randomnumber].taken==false){
                        peoples[i].taken=true;
                        peoples[randomnumber].taken=true;
                        for(let l=0;l<Math.floor(Math.random()*3)+1;l++){
                            peoples.push(this.newborn(peoples[i],peoples[randomnumber]))
                        }
                        console.log(peoples.length)
                        break;
                    }
                }
            }
        }
    }

    private static newborn(parent1:People,parent2:People):People{
        let kidStr:number=(((parent1.strength+parent2.strength)/2)+Math.floor(Math.random() * 10) -5)
        let kidDex:number=(((parent1.dexterity+parent2.dexterity)/2)+Math.floor(Math.random() * 10) -5)
        let kidInt:number=(((parent1.inteligence+parent2.inteligence)/2)+Math.floor(Math.random() * 10) -5)   
        let newkid:People=new People(kidStr,kidInt,kidDex);
        
        return newkid;
    }
}
