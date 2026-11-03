import mongoose from 'mongoose'
import logger from '../common/logger'

// Get current connected Database
const db = mongoose.connection

// Notify on error or success
db.on('error', (err) => logger.error({ err }, 'connection with db error'))
db.on('disconnected', () => logger.info('connection closed to db'))

export const connectDB = async (uri = process.env.MONGO_URI) => {
  if (!uri) {
    throw new Error('MONGO_URI is not set')
  }

  await mongoose.connect(uri)
  logger.info(`Connected to the database "${db.name}" on ${db.host}:${db.port}`)
}

export const disconnectDB = () => mongoose.disconnect()
