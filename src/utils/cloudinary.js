import { v2 as cloudinary } from "cloudinary";
import fs from "fs"


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        //upload file
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been upload
        // console.log("file is uploaded on cloudinaary",response.url);
        fs.unlinkSync(localFilePath)
        return response;
    }catch (error){
        fs.unlinkSync(localFilePath) //remove unwanted file
        return null;
    }
}

export {uploadOnCloudinary}
