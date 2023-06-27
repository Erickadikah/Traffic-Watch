import mongoose from 'mongoose';

const connectDB = async () => {
    if(mongoose.connection.readyState >= 1) {
        console.log('Connected to MongoDB...');
        return;

    }

    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));
}

export default connectDB;