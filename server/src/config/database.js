import mongoose from 'mongoose'
import logger from '../utils/logger.js'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // These options help with Atlas connections
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    })
    logger.info(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    logger.error('MongoDB connection error:', error)
    // Don't crash immediately — let Render retry
    setTimeout(connectDB, 5000)
  }
}
