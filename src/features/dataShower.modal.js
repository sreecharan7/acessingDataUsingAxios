import _ from "lodash" 
import {custonerror} from "../../error/error.js"
export default class dataModifier{
    static DataAnalystic(data){
        //error handling
        if(!data["blogs"]||typeof(data["blogs"])!="object"){throw new custonerror("some issue with external data",500);}

        data=data.blogs;
        var re={}
        const n=data.length
        re["Total number of blogs"]=n;
        let ip=0;//no of privacy keyword
        let h=-1;//highest title length
        let hh="";//highest title
        let hash={}//unique elements
        for(let i=0;i<n;i++){
            if(data[i]["title"].toLowerCase().includes("privacy")){
                ip++;
            }
            if(data[i]["title"].length>h){
                h=data[i]["title"].length;
                hh=data[i]["title"];
            }
            hash[data[i]["title"]]=1;

        }
        re['Number of blogs with "privacy" in the title']=ip;
        if(h!=-1){
        re["The title of the longest blog"]=hh;
        }
        re["An array of unique blog titles"]=Object.keys(hash);
        return re;
    }
    static searchData(data,keyword){
        //error handling
        if(!data["blogs"]||typeof(data["blogs"])!="object"){throw new custonerror("some issue with external data",500);}
        if(!keyword){throw new custonerror("Incorrect search filter",400);}

        data=data.blogs;
        let re=[];
        keyword=keyword.toLowerCase();
        for(let i=0;i<data.length;i++){
            if(data[i]["title"].toLowerCase().includes(keyword)){
                re.push(data[i]);
            }
        }
        re ={search:re}
        return re;
    }
}