import mongoose, { Schema } from 'mongoose'
import UserInterface from './interface'

// Define the User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
})

// Create the User model
const User = mongoose.model<UserInterface>('User', UserSchema)

export default User
