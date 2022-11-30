import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    email: string,
    name: string,
    shopName: string,
    password: string
}

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    shopName: {
        type: String
    },
    password: {
        type: String
    }
});

const User = model<IUser>('User', userSchema);

export default User;