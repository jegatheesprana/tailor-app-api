import { Schema, model, Document } from 'mongoose';

export interface IMaterial extends Document {
    id: string,
    name: string,
    description: string,
    unitPrice: number,
}

const materialSchema = new Schema<IMaterial>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    unitPrice: {
        type: Number,
    }
});

const Material = model<IMaterial>('Material', materialSchema);

export default Material;