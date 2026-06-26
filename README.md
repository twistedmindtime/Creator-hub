# Creator Hub - SaaS Platform

A complete SaaS platform for creators to monetize their content with Stripe integration.

## Features

✅ **User Authentication** - Secure signup and login
✅ **Creator Profiles** - Set up creator accounts with subscription tiers
✅ **Stripe Integration** - Accept recurring payments
✅ **Subscriber Management** - Track and manage subscribers
✅ **Revenue Analytics** - Monitor earnings and growth
✅ **Dashboard** - User-friendly interface for creators and subscribers
✅ **Modern UI** - Responsive design with dark theme

## Tech Stack

- **Frontend:** React 18, Vite, Axios, Zustand
- **Backend:** Node.js, Express, MongoDB
- **Payments:** Stripe API
- **Styling:** CSS3, Dark theme

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/twistedmindtime/creator-hub.git
cd creator-hub
```

### 2. Setup Environment Variables

Create a `.env` file in the root directory:

```bash
# Stripe Keys
STRIPE_SECRET_KEY=sk_live_your_key_here
STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/creator-hub

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here

# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Servers

```bash
npm run dev
```

This will start both the backend (port 5000) and frontend (port 5173).

## Project Structure

```
creator-hub/
├── server/
│   ├── models/
│   │   ├── User.js
│   │   ├── Creator.js
│   │   ├── Subscription.js
│   │   └── Post.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── creators.js
│   │   ├── subscriptions.js
│   │   └── payments.js
│   └── index.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Creators
- `GET /api/creators` - Get all creators
- `GET /api/creators/:id` - Get creator profile
- `POST /api/creators/:userId` - Create creator profile

### Payments
- `POST /api/payments/create-subscription` - Create Stripe subscription
- `POST /api/payments/webhook` - Stripe webhook handler

### Subscriptions
- `GET /api/subscriptions/user/:userId` - Get user subscriptions
- `GET /api/subscriptions/creator/:creatorId` - Get creator subscribers

## How to Use

1. **Register/Login** - Create an account
2. **Become a Creator** - Set up your creator profile with subscription tiers
3. **Configure Tiers** - Create different subscription levels (Bronze, Silver, Gold, etc.)
4. **Set Prices** - Each tier has its own price point
5. **Share Your Profile** - Share your creator profile link
6. **Accept Payments** - Receive payments via Stripe
7. **Monitor Analytics** - Track subscribers and earnings

## Stripe Setup

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to Developers → API Keys
3. Copy your **Publishable Key** and **Secret Key**
4. Add them to your `.env` file
5. Set up webhook for payment events (optional but recommended)

## Deployment

### Backend (Heroku)
```bash
heroku create your-app-name
git push heroku main
```

### Frontend (Vercel)
```bash
npm install -g vercel
vercel
```

## Security Notes

⚠️ **Never commit `.env` file to Git**
⚠️ **Keep your Stripe secret key confidential**
⚠️ **Always validate requests on the backend**
⚠️ **Use HTTPS in production**

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open a GitHub issue.

Happy monetizing! 🚀
