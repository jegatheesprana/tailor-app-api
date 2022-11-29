import { Schema, model, Document } from 'mongoose';

export interface ICustomer extends Document {
    id: string,
    name: string,
    contactNumber: string,
    NIC: string
}

const customerSchema = new Schema<ICustomer>({
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
    }
});

const Customer = model<ICustomer>('Customer', customerSchema);

export default Customer;