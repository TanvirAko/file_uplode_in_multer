import { join } from "path";
import { generateRandomUniqueId } from "../helper/rendomid.js";
import fs from "fs";
import { json } from "express";
import { ProductSlug } from "../helper/slug.js";
//get all products
export const  getAllprodact = (req,res)=>{

const prodactdata = JSON.parse(fs.readFileSync("db/prodact.json").toString());

if(prodactdata.length === 0){

res.status(404).json({message: "prodact data in node found"})
return
}

    res.status(200).json({prodact : prodactdata});
}
 // get sengle prodact
 export const getAllsengleprodact=(req,res)=>{

const {slog}= req.params;
console.log(slog);

    const prodactdata = JSON.parse(fs.readFileSync("db/prodact.json").toString())
    const sengleprodact = prodactdata.find((data)=> data.slog === slog)

    if(!sengleprodact){
        return res.status(404).json({message : "404 prodact is note found"});
    }
    res.status(200).json({ptodact: sengleprodact})
 }
//post product
export const getSengleProdact = (req,res)=>{

const {name,price,reglur_price,stock,} = req.body;

if(!name || !price){
    return res.status(400).json({message : "prodact name and product price please be provided"});
}


const prodactdata = JSON.parse(fs.readFileSync("db/prodact.json").toString());
// prodact chakes
 if(prodactdata.some((data)=> data.slog === ProductSlug(name))){
    return res.status(400).json({message : "all rade ai prodact ta all rade asa"});
 }

 const prodact = { id:generateRandomUniqueId(), name, slog: ProductSlug(name), price,reglur_price,stock, photo: req.file.filename}
prodactdata.push(prodact)
fs.writeFileSync("db/prodact.json" , JSON.stringify(prodactdata))
res.status(200).json({ prodact,  message : "OK prodact get sengle prodact in sussesful"})

}
// get data delate
export const getsengleprodactDelete = (req,res)=>{
    const {id} = req.params;
const prodactdata = JSON.parse(fs.readFileSync("db/prodact.json").toString());

const ubgDATA = prodactdata.filter((data)=> data.id !==id)
fs.writeFileSync("db/prodact.json" , JSON.stringify(ubgDATA))

res.status(200).json({message: "data delate is sussesfule"})
}

