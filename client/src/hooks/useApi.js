import { useState, useCallback } from 'react'
import api from '../services/api'

export const useApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (method, url, data = null) => {
    setLoading(true)
    setError(null)
    try {
      const response = await api[method](url, data)
      setLoading(false)
      return response.data
    } catch (err) {
      setLoading(false)
      setError(err.response?.data?.message || 'Something went wrong')
      throw err
    }
  }, [])

  return { loading, error, request }
}
