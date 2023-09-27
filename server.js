import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import  profile from "./router/routerProfile.js"
import userProfilePhoto_server from "./router/routerMultapole.js"
import userPostPhotoss from ".//router/routerPost.js"
import  clouder  from "./router/routercloud.js";
import getprodact from "./router/routerProdact.js"
// env config
dotenv.config();


//env init
const PORT = process.env.PORT || 6060 ;


//express init
const app = express();



//public folder 
app.use(express.static("public"))
// erxpress middlewars
app.use(express.json());
app.use(express.urlencoded(
    {extended :false}
))
//routers
app.use(profile)
app.use(userProfilePhoto_server)
app.use(userPostPhotoss)
app.use(clouder)
app.use(getprodact)
//express listen
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT} port`.bgGreen.black);
});
