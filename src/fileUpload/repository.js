const firebase = require('../../firebase')
class Repository {
    async save(files) {
        try {
            console.log(files);
    
            // Generate a new document ID
            const id = firebase.firestore().collection('files').doc().id;
            console.log(id);
    
            // Ensure that files[0] exists before trying to access its properties
            if (!files['0']) {
                throw new Error('File not found.');
            }
    
            // Set the file information to Firestore
            const fileData = {
                id: id,
                fieldname: files['0'].fieldname,
                mimetype: files['0'].mimetype,
                path: files['0'].path,
                size: files['0'].size
            };
    
            await firebase.firestore().collection('files').doc(id).set(fileData);
    
            console.log('File successfully saved:', fileData);
    
            return fileData;
        } catch (error) {
            console.error('Error saving file:', error);
            throw error;
        }
    }
    
}
module.exports = Repository;