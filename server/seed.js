require('dotenv').config()
const mongoose = require('mongoose')
const Admin = require('./models/Admin')

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('✅ Connected to MongoDB')

    // Remove existing admin
    await Admin.deleteMany({})

    // Create admin from env vars
    const admin = await Admin.create({
      username: process.env.ADMIN_USERNAME || 'admin',
      password: process.env.ADMIN_PASSWORD || 'admin123',
      role: 'owner'
    })

    console.log(`✅ Admin created: username="${admin.username}"`)
    console.log('⚠️  Change the password in .env and re-run seed.js before going live!')
    process.exit(0)
  } catch (err) {
    console.error('❌ Seed failed:', err.message)
    process.exit(1)
  }
}

seed()
