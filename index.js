import express from "express"
import externalDataSource from "./src/middleware/externalData.middleware.js"
import dataShower from "./src/features/dataShower.controller.js";
import {errorHandler} from "./error/error.js"
import {checkCacheSearch,checkCacheAnalystic} from "./src/middleware/cache.middleware.js"
const app=express();


app.get("/api/blog-stats",checkCacheAnalystic,externalDataSource,dataShower.showData);
app.get("/api/blog-search",checkCacheSearch,externalDataSource,dataShower.searchData);

app.use(errorHandler);
app.use((req,res)=>{res.status(404).send("The link you followed may be broken")})

app.listen(3000,()=>{console.log("server is started at 3000")});

