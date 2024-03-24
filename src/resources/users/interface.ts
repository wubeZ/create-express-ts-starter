import { Document } from 'mongoose'

// Define the User Model Interface
interface UserInterface extends Document {
  name: string
}

export default UserInterface
