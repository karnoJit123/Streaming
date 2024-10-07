const Repository = require('./repository')
exports.upload = async function (request, response) {

    const repository = new Repository({ ...request.body });
    try {
        await repository.save({...request.files ??[]});
        response.status(200).json({
            code: 200, "message": 'Uploaded Successfully'
        });

    } catch (error) {
        response.status(400).json({
            code: 400, "message":error.message
        });
    }
}