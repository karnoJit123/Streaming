// const firebase = require('../../firebase');
const uploadProcess=require('../../document')
class Repository {
    async save(files) {
        try {

            console.log(files);
            
            /** check for files in the request */
            if (files) {
                const uploadedFile = await uploadProcess.uploadFile("test", files['0'].originalname);
                return uploadedFile;
            }
            //     /** separate the document and image files */
            //     const documentFiles = files.filter(file => file.fieldname.includes("documents"));
            //     const imageFiles = files.filter(file => file.fieldname.includes("images"));

            //     /** loop through the both array of files and upload them into firebase storage */
            //     const documentUploads = documentFiles.map(async file => {
            //         const uploadedFile = await uploadProcess.uploadFile("salesmen/documents", file.originalname);
            //         documents.push({ url: uploadedFile, name: file.originalname, mimetype: file.mimetype, size: file.size });
            //     });
            //     const imageUploads = imageFiles.map(async file => {
            //         const uploadedFile = await uploadProcess.uploadFile("salesmen/images", file.originalname);
            //         images.push({ url: uploadedFile, name: file.originalname, mimetype: file.mimetype, size: file.size });
            //     });

            //     /** wait for all uploads to complete */
            //     await Promise.all([...documentUploads, ...imageUploads]);
            // }

            // /** attach both the documents and images array to the salesman */
            // this.payload.documents = (existingSalesman.documents || []).concat(documents);
            // this.payload.images = (existingSalesman.images || []).concat(images);
    
            return fileData;
        } catch (error) {
            console.error('Error saving file:', error);
            throw error;
        }
    }
    
}
module.exports = Repository;