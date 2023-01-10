import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
    id: string,
    name: string,
    description: string,
    unitPrice: number,
}

const productSchema = new Schema<IProduct>({
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

const Product = model<IProduct>('Product', productSchema);

export default Product;