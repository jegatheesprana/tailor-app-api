import { Schema, model, Document } from 'mongoose';

export interface IMeasurement extends Document {
    name: string,
    value: string
}

const measurementSchema = new Schema<IMeasurement>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: String
    },
});

const Measurement = model<IMeasurement>('Measurement', measurementSchema);

export default Measurement;