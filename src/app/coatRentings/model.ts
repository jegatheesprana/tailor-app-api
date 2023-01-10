import { Schema, model, Document } from 'mongoose';

export interface ICoatRenting extends Document {
    id: string,
    orderNumber: string,
    customerName: string,
    contactNumber: string,
    NIC: string,
    coatNumber: string,
    price: number,
    returnDate: Date
}

const coatRentingSchema = new Schema<ICoatRenting>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    orderNumber: {
        type: String,
        required: true,
        unique: true
    },
    customerName: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
    },
    NIC: {
        type: String,
    },
    coatNumber: {
        type: String,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    returnDate: {
        type: Date,
        default: new Date()
    },
});

const CoatRenting = model<ICoatRenting>('CoatRenting', coatRentingSchema);

export default CoatRenting;