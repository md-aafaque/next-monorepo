import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String},
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
