const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/autosharepolling';

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check route
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// API routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    console.log('🔗 Attempting to connect to MongoDB...');
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB successfully');

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`🏥 Health check: http://localhost:${PORT}/health`);
      console.log(`📚 API base URL: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    console.log('\n💡 To fix this, you have 3 options:');
    console.log('\n1. 🔥 QUICK SETUP - MongoDB Atlas (Recommended):');
    console.log('   - Go to: https://www.mongodb.com/atlas');
    console.log('   - Create free account and cluster');
    console.log('   - Copy connection string to .env file');
    console.log('   - Example: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database');
    
    console.log('\n2. 🏠 LOCAL SETUP - Install MongoDB:');
    console.log('   - Download from: https://www.mongodb.com/try/download/community');
    console.log('   - Install and start MongoDB service');
    
    console.log('\n3. 🧪 TEST MODE - Start without database:');
    console.log('   - Create .env file with: MONGODB_URI=test');
    console.log('   - Server will start but auth won\'t work');
    
    console.log('\n📝 Create a .env file in the Server directory with:');
    console.log('PORT=5000');
    console.log('MONGODB_URI=your_connection_string_here');
    console.log('JWT_SECRET=your-secret-key');
    console.log('CLIENT_URL=http://localhost:5173');
    
    // Start server anyway for testing
    app.listen(PORT, () => {
      console.log(`\n🚀 Server is running on port ${PORT} (without database)`);
      console.log(`🏥 Health check: http://localhost:${PORT}/health`);
      console.log('⚠️  Note: Authentication endpoints will not work without database.');
    });
  }
};

startServer();

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
}); 