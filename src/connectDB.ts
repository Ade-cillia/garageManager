import dotenv  from 'dotenv';
import mongoose from "mongoose";
dotenv.config()
const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@coursnode.mhaggd3.mongodb.net/?retryWrites=true&w=majority`,
        );
        console.log('Connexion à MongoDB réussie !');
    } catch (error) {
        throw new Error("Connexion à MongoDB échouée !");
    }
    return;
}
export default connectDB;
