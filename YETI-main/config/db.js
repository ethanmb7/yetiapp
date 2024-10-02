// config/db.js
const yeti = require('yeti');

const connectDB = async () => {
    try {
        await yeti.connect(process.env.YETI_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('YetiDB connected successfully.');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
