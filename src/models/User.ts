import mongoose = require('mongoose');
import Schema = mongoose.Schema;

import { IUser } from '../interfaces';

const UserSchema: Schema<IUser> = new Schema({
    fisrtName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // dateRegistration: { type: Date, default: Date.now() }
});