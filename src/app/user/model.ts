import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    username: string,
    name: string,
    phoneNumber: string,
    password: string
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    password: {
        type: String
    }
});

const User = model<IUser>('User', userSchema);

export default User;