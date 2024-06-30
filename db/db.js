const mongoose = require('mongoose');
const logger = require('../utils/logger');
const { DB_URI } = require('../config/config');
async function connectDB() {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
        });
        logger.info('MongoDB Connected');
    } catch (err) {
        logger.error('MongoDB Connection Error:', err);
        throw err;
    }
}

module.exports = connectDB;
