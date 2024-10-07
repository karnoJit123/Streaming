const fs = require('fs');

const db = require("./firebase");

const UUID = require("uuid-v4");

const path = require("path");

const os = require('os');

exports.uploadFile = async (folder, fileName) => {
    console.log("hi",fileName);
    
    const uuid = UUID();

    const storage = db.storage();

    const bucket = storage.bucket("gs://streaming-44c5b.appspot.com");

    var downLoadPath = "https://firebasestorage.googleapis.com/v0/b/streaming-44c5b.appspot.com/o/";

    const destinationFile = bucket.file(`${folder}/` + Date.now() + "_" + fileName);

    const data = fs.readFileSync(path.resolve(os.tmpdir() + "/" + fileName));

    try {
        await destinationFile.save(data);

        destinationFile.setMetadata({ metadata: { firebaseStorageDownloadTokens: uuid } });

        var fileURL = downLoadPath + encodeURIComponent(destinationFile.name) + "?alt=media&token=" + uuid;

        return fileURL;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
  // let documents = [];
            // let images = [];

            // /** check for files in the request */
            // if (files && files.length > 0) {
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