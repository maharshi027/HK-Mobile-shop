# 📱 Mobile Accessories Shop — Full Stack App

React.js + Node.js website for a mobile accessories shop with admin backend.

---

## 📁 Project Structure

```
mobile-shop/
├── client/        # React.js frontend (Vite)
└── server/        # Node.js + Express backend
```

---

## 🚀 Getting Started

### 1. Backend Setup

```bash
cd server
npm install
cp .env.example .env     # Edit .env with your values
npm run seed             # Creates admin user in MongoDB
npm run dev              # Starts server on port 5000
```

### 2. Frontend Setup

```bash
cd client
npm install
cp .env.example .env     # Edit .env with your values
npm run dev              # Starts React app on port 3000
```

---

## 🔑 Admin Login

- URL: `http://localhost:3000/admin`
- Default credentials are set in `server/.env`
- **Change these before going live!**

---

## 🌐 Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Services | `/services` |
| Gallery | `/gallery` |
| About Us | `/about` |
| Contact | `/contact` |
| Admin Login | `/admin` |
| Admin Dashboard | `/admin/dashboard` |

---

## 🔌 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/contact` | Public | Submit enquiry |
| GET | `/api/contacts` | JWT | Get all enquiries |
| PUT | `/api/contacts/:id` | JWT | Update status |
| DELETE | `/api/contacts/:id` | JWT | Delete enquiry |
| POST | `/api/auth/login` | Public | Admin login |
| GET | `/api/gallery` | Public | Get gallery |
| POST | `/api/gallery` | JWT | Upload media |
| DELETE | `/api/gallery/:id` | JWT | Delete media |

---

## 📧 Email Setup (Gmail)

1. Enable 2-Factor Authentication in Gmail
2. Generate an App Password: Google Account → Security → App Passwords
3. Use that App Password in `EMAIL_PASS` in `server/.env`

---

## 🚀 Deployment

- **Frontend**: Deploy `client/` to [Vercel](https://vercel.com) — set env vars in Vercel dashboard
- **Backend**: Deploy `server/` to [Railway](https://railway.app) or [Render](https://render.com)
- **Database**: Use [MongoDB Atlas](https://cloud.mongodb.com) (free tier)

---

## 🛡️ Environment Variables

### Client (`client/.env`)
| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL |
| `VITE_SHOP_NAME` | Shop display name |
| `VITE_WHATSAPP_NUMBER` | WhatsApp number with country code |
| `VITE_GOOGLE_MAPS_EMBED_URL` | Google Maps embed URL |

### Server (`server/.env`)
| Variable | Description |
|----------|-------------|
| `PORT` | Server port |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret for JWT signing |
| `ADMIN_USERNAME` | Admin login username |
| `ADMIN_PASSWORD` | Admin login password |
| `EMAIL_USER` | Gmail address for notifications |
| `EMAIL_PASS` | Gmail app password |
| `CLIENT_URL` | Frontend URL for CORS |
