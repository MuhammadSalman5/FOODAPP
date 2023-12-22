export class Foods{
    // initialization variable and datatype
    // this ! exclamaitary sign very important otherwise you create constructor
    id!:number;
    price!:number;
    name!:string;
    favourite:Boolean=false;
    star:number=0;
    tags?:string[];
    imageurl!:string;
    cookTime!:string;
    origins!:string[];
}