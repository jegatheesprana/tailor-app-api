import { Schema, model, Document } from 'mongoose';

export interface ITailor extends Document {
    id: string,
    name: string,
    contactNumber: string,
    NIC: string,
    joined: Date,
    employementLevel: number
}

const tailorSchema = new Schema<ITailor>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
    },
    NIC: {
        type: String,
    },
    joined: {
        type: Date,
        default: new Date()
    },
    employementLevel: {
        type: Number,
        default: 0
    }
});

const Tailor = model<ITailor>('Tailor', tailorSchema);

export default Tailor;