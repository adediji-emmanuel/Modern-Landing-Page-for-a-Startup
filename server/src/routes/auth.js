import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { validate, registerValidation, loginValidation } from '../middleware/validator.js'

const router = express.Router()

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken()
  
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  }

  res.status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar
      }
    })
}

// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', validate(registerValidation), async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const user = await User.create({ name, email, password })
    sendTokenResponse(user, 201, res)
  } catch (error) {
    next(error)
  }
})

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', validate(loginValidation), async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    user.lastLogin = new Date()
    await user.save()

    sendTokenResponse(user, 200, res)
  } catch (error) {
    next(error)
  }
})

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.token
    if (!token) return res.status(401).json({ message: 'Not authorized' })

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id)

    res.status(200).json({ success: true, data: user })
  } catch (error) {
    next(error)
  }
})

export default router
