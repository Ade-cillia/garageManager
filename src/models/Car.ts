import { Types, model, Schema } from "mongoose";


export interface ICar {
    brandName: String,
    modelName: String,
    modelEnergy: String,
    modelPrice: Types.Decimal128,
    dateBuy: Date   
}
const CarSchema = new Schema<ICar>({
    brandName: { type: String, required: true },
    modelName: { type: String, required: true },
    modelEnergy: { type: String, required: true },
    modelPrice: { type: Types.Decimal128, required: true },
    dateBuy: { type: Date, required: true }
});

export default model<ICar>("Car",CarSchema)