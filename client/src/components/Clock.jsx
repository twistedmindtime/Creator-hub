import React, { useState, useEffect } from 'react'
import './Clock.css'

function Clock() {
  const [times, setTimes] = useState({})
  const [is24Hour, setIs24Hour] = useState(true)

  const timeZones = [
    { name: 'New York', zone: 'America/New_York' },
    { name: 'London', zone: 'Europe/London' },
    { name: 'Tokyo', zone: 'Asia/Tokyo' },
    { name: 'Sydney', zone: 'Australia/Sydney' },
    { name: 'Dubai', zone: 'Asia/Dubai' },
    { name: 'Singapore', zone: 'Asia/Singapore' },
    { name: 'Los Angeles', zone: 'America/Los_Angeles' },
    { name: 'Bangkok', zone: 'Asia/Bangkok' },
  ]

  useEffect(() => {
    const updateTimes = () => {
      const updatedTimes = {}
      timeZones.forEach(({ name, zone }) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: zone,
          hour: is24Hour ? '2-digit' : 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: !is24Hour,
        })
        updatedTimes[name] = formatter.format(new Date())
      })
      setTimes(updatedTimes)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [is24Hour])

  return (
    <div className="clock-container">
      <div className="clock-header">
        <h1>🌍 Global Time Clock</h1>
        <button 
          className="toggle-btn"
          onClick={() => setIs24Hour(!is24Hour)}
        >
          {is24Hour ? '24H' : '12H'}
        </button>
      </div>

      <div className="clocks-grid">
        {timeZones.map(({ name, zone }) => (
          <div key={zone} className="time-card">
            <h2>{name}</h2>
            <div className="time-display">{times[name] || '00:00:00'}</div>
            <p className="timezone">{zone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clock
