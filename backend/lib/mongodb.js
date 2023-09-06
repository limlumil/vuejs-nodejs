const mongoose = require('mongoose');

async function connectDatabase() {

    mongoose.set('strictQuery', true);
    const db = process.env.DATABASE
    try {
        await mongoose.connect(db, { useNewUrlParser: true })
            .then(() => {
                console.log('conneted');
            })
            
    } catch (error) {
        console.error(error);
        return;
    }

}

module.exports = connectDatabase;