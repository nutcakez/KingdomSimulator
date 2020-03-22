export class People{
    rank:number;
    constructor(rank:number){
        this.rank=rank;
    }

    product():number{
        return this.rank*2;
    }

}