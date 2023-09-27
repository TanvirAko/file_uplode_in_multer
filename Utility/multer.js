import multer from "multer";
  //  multer setup 
  const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
       

if (file.fieldname === 'userProfilePhoto') {
  cb( null, "public/profile");
}

else if (file.fieldname === "userMultipolePhoto") {
cb( null, "public/multipole");
}
else if (file.fieldname === "userPostPhoto"){
  cb(null , "public/postphoto");
}
 else if(file.fieldname === "postcv"){
  cb(null , "public/cv");
 }

    },
    filename : (req,file,cb)=>{
        cb(null , Math.floor(Math.random() * 100000)  +"___"+ file.originalname)
    },
  });
  export const userProfilePhoto = multer({storage: storage ,fileFilter:(req,file,cb)=>{

if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"  || file.mimetype === "video/mp4"){
cb(null , true)

} else{
  cb(new Error("invalid fikle type"))
}
  },limits:{
    fieldSize : 1
  } }).single("userProfilePhoto");

  export const usermultipolePhotouplode = multer({storage: storage}).array("userMultipolePhoto");
  export const userpostphotos = multer ({storage : storage}).fields([
    {
      name: 'userPostPhoto',
      maxCount: 1
    },
    {
      name : "postcv",
      maxCount : 1
    }
  ])



  