import express from 'express'
import Subscriber from '../models/Subscriber.js'
import Contact from '../models/Contact.js'
import User from '../models/User.js'

const router = express.Router()

// @route   GET /api/analytics/dashboard
// @desc    Get dashboard analytics
// @access  Private/Admin
router.get('/dashboard', async (req, res, next) => {
  try {
    const [
      totalSubscribers,
      totalContacts,
      totalUsers,
      recentSubscribers,
      recentContacts
    ] = await Promise.all([
      Subscriber.countDocuments(),
      Contact.countDocuments(),
      User.countDocuments(),
      Subscriber.find().sort({ createdAt: -1 }).limit(5),
      Contact.find().sort({ createdAt: -1 }).limit(5)
    ])

    // Get subscriber growth by month
    const sixMonthsAgo = new Date()
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

    const subscriberGrowth = await Subscriber.aggregate([
      {
        $match: { createdAt: { $gte: sixMonthsAgo } }
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m', date: '$createdAt' } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ])

    res.status(200).json({
      success: true,
      data: {
        counts: { totalSubscribers, totalContacts, totalUsers },
        recentSubscribers,
        recentContacts,
        subscriberGrowth
      }
    })
  } catch (error) {
    next(error)
  }
})

export default router
