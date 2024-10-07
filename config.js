require('dotenv').config();

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`) })

module.exports = {
    NODE_ENV: process.env.NODE_ENV || "development",
    HOST: process.env.HOST || "localhost",
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/Listapp",
    JWT_SECRET: process.env.JWT_SECRET || "FileUploadScretKey"
}
