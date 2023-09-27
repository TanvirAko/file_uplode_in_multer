import multer from "multer";
    const storaze = multer.diskStorage({

destination : (req,file,cb)=>{
  if(file.fieldname === "prodactPhoto"){
    cb(null , "public/prodacts")
  }

},
filename : (req,file, cb)=>{
cb(null, Math.floor(Math.random() * 100000000) +"_____"+ file.originalname  )

}
    });



     export const clouidmulter = multer({storage : storaze}).single("photoclouids");
     export const  getprodactmulter = multer({storage : storaze}).single("prodactPhoto");