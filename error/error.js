export class custonerror extends Error{
    constructor(errorSubject,statusCode){
        super(errorSubject);
        this.statusCode=statusCode;
    }
}

export function errorHandler(err,req,res,next){
    if(err instanceof custonerror){
        res.status(err.statusCode).send(err.message);
    }
    else{
        res.status(500).send("Oops sometrhing went wrong!!");
    }
}