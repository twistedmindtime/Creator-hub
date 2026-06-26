import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import './Navbar.css'

function Navbar() {
  const { user, logout } = useAuthStore()

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">🎬 Creator Hub</Link>
        <div className="nav-links">
          <Link to="/clock" className="nav-item">🕐 Clock</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="nav-item">Dashboard</Link>
              <button onClick={logout} className="nav-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-item">Login</Link>
              <Link to="/register" className="nav-item">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
