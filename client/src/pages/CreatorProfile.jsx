import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import './CreatorProfile.css'

function CreatorProfile() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/creators/${id}`)
        setCreator(res.data)
      } catch (err) {
        toast.error('Creator not found')
        navigate('/')
      } finally {
        setLoading(false)
      }
    }
    fetchCreator()
  }, [id, navigate])

  const handleSubscribe = async (tier) => {
    try {
      const res = await axios.post('http://localhost:5000/api/payments/create-subscription', {
        creatorId: id,
        tierId: tier._id,
        tierName: tier.name,
        tierPrice: tier.price,
        email: 'user@example.com'
      })
      window.location.href = res.data.url
    } catch (err) {
      toast.error('Subscription failed')
    }
  }

  if (loading) return <div className="container">Loading...</div>
  if (!creator) return null

  return (
    <div className="container">
      <div className="creator-header">
        <img src={creator.profileImage || '👤'} alt={creator.displayName} className="creator-avatar" />
        <div className="creator-info">
          <h1>{creator.displayName}</h1>
          <p>{creator.bio}</p>
          <span className="subscriber-count">{creator.totalSubscribers} Subscribers</span>
        </div>
      </div>

      <div className="tiers-section">
        <h2>Support Tiers</h2>
        <div className="tiers-grid">
          {creator.tiers?.map(tier => (
            <div key={tier._id} className="tier-card">
              <h3>{tier.name}</h3>
              <p className="tier-price">${tier.price}/month</p>
              <p className="tier-description">{tier.description}</p>
              <ul className="tier-features">
                {tier.features?.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button onClick={() => handleSubscribe(tier)}>Subscribe Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CreatorProfile
