import _ from "lodash"

let data;
export function checkCacheSearch(req,res,next){
    var key=req.query.query;
    const x=getChache(key);
    if(!x){next();}
    else{res.status(200).json(x);}
}
export function checkCacheAnalystic(req,res,next){
    const x=getChache("%/analysticData/%");
    if(!x){next();}
    else{res.status(200).json(x);}
}

 function chacheX(x){
    return data;
}

function customKeyGenerator(input) {
    return JSON.stringify(input);
}
const cache =_.memoize(chacheX,customKeyGenerator, { maxAge: 5000});

export function addChache(datatoKeep,key){
    data=datatoKeep;
    cache(key);
    data=undefined;
}
export function getChache(key){
    const data=cache(key);
    if(!data){
        const key1 = customKeyGenerator(key);
        cache.cache.delete(key1);
    }
    return data;
}
