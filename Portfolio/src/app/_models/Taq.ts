export class Taq{

    static readonly Angular = new Taq('Angular' , 'red');
    static readonly Python = new  Taq('Python','#3673a5');
    static readonly Html = new Taq('HTML','#3673a5');
    static readonly CSS = new Taq('CSS' ,'#3673a5');
    static readonly Flask = new Taq('Flask' ,'red');
 
    

    private constructor(private readonly key : string, public readonly color : string){

    }

    toString(){
        return this.key;
    }
}