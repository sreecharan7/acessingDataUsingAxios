import dataModifier from "./dataShower.modal.js";
import {addChache} from "../middleware/cache.middleware.js"
export default class dataShower{
    static showData(req,res){
        let data=dataModifier.DataAnalystic(req.externalData)
        addChache(data,"%/analysticData/%");
        res.json(data);
    }
    static searchData(req,res){
        const keyword=req.query["query"];
        let data=dataModifier.searchData(req.externalData,keyword);
        addChache(data,keyword);
        res.json(data);
    }
}

  