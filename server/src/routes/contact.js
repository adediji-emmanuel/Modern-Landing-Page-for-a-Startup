import express from 'express'
import Contact from '../models/Contact.js'
import { validate, contactValidation } from '../middleware/validator.js'

const router = express.Router()

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', validate(contactValidation), async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body

    const contact = await Contact.create({
      name,
      email,
      subject: subject || 'General Inquiry',
      message
    })

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Message sent successfully! We will get back to you soon.'
    })
  } catch (error) {
    next(error)
  }
})

export default router
