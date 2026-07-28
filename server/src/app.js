import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.js'
import contactRoutes from './routes/contact.js'
import subscriberRoutes from './routes/subscribers.js'
import analyticsRoutes from './routes/analytics.js'
import errorHandler from './middleware/errorHandler.js'

dotenv.config()

const app = express()

// Security middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX) || 100,
  message: 'Too many requests from this IP, please try again later.'
})
app.use('/api/', limiter)

// Body parsing
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compression())

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/subscribers', subscriberRoutes)
app.use('/api/analytics', analyticsRoutes)

// Error handling
app.use(errorHandler)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

export default app
