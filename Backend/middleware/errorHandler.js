module.exports=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    switch(statusCode){
        case 400:
            res.json({title:"VALIDATION NOT FOUND",message:err.message,stackTrace:err.stack,});
            break;
        case 401:
            res.json({title:"UNAUTHORIZED ACCESS",message:err.message,stackTrace:err.stack});
            break;
        case 404:
            res.json({title:"NOT FOUND",message:err.message,stackTrace:err.stack});
            break;
        default:
            res.json({message:err.message,stackTrace:err.stack});
    }
    next();
}