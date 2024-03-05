const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.ATLAS_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB Connected');
    } catch (error) {
        console.error('DB Connection Error:', error.message);
    }
};

module.exports = { db };
