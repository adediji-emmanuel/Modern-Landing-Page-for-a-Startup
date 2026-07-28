import express from 'express'
import Subscriber from '../models/Subscriber.js'
import { validate, subscriberValidation } from '../middleware/validator.js'

const router = express.Router()

// @route   POST /api/subscribers
// @desc    Create new subscriber
// @access  Public
router.post('/', validate(subscriberValidation), async (req, res, next) => {
  try {
    const { email, source } = req.body

    const existingSubscriber = await Subscriber.findOne({ email })
    if (existingSubscriber) {
      return res.status(400).json({ message: 'This email is already subscribed' })
    }

    const subscriber = await Subscriber.create({ email, source })

    res.status(201).json({
      success: true,
      data: subscriber,
      message: 'Successfully subscribed!'
    })
  } catch (error) {
    next(error)
  }
})

// @route   GET /api/subscribers
// @desc    Get all subscribers (admin only)
// @access  Private/Admin
router.get('/', async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      count: subscribers.length,
      data: subscribers
    })
  } catch (error) {
    next(error)
  }
})

export default router
