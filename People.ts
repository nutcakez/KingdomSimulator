export class People{
    rank:number;
    constructor(rank){
        this.rank=rank;
    }

    product():number{
        return this.rank*3;
    }

}