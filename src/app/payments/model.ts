import { Schema, model, Document } from 'mongoose';

export interface IPayment extends Document {
    id: string,
    customerName: string,
    contactNumber: string,
    NIC: string,
    date: Date,
    amount: number
}

const paymentSchema = new Schema<IPayment>({
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
    date: {
        type: Date,
        default: new Date()
    },
    amount: {
        type: Number,
        default: 0
    }
});

const Payment = model<IPayment>('Payment', paymentSchema);

export default Payment;