import { Schema, model, Document } from 'mongoose';

export interface IWorkOrder extends Document {
    id: string,
    customerName: string,
    contactNumber: string,
    NIC: string,
    date: Date,
    description: string
}

const workOrderSchema = new Schema<IWorkOrder>({
    id: {
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
    date: {
        type: Date,
        default: new Date()
    },
    description: {
        type: String,
    }
});

const WorkOrder = model<IWorkOrder>('WorkOrder', workOrderSchema);

export default WorkOrder;