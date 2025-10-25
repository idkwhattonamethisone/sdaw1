# Hostinger MongoDB Deployment Guide

## Quick Setup (1 Hour)

### Step 1: MongoDB Atlas Setup (10 minutes)
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create account or sign in
3. Create new cluster (Free M0 tier)
4. Create database user:
   - Username: `sanrico_user`
   - Password: Generate secure password
5. Add IP address `0.0.0.0/0` to whitelist (allow all IPs)
6. Get connection string from "Connect" button

### Step 2: Update Environment Variables (5 minutes)
1. Copy `env-production.txt` to `.env`
2. Replace the MongoDB URI with your Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://sanrico_user:YOUR_PASSWORD@your-cluster.mongodb.net/MyProductsDb?retryWrites=true&w=majority
   ```

### Step 3: Hostinger Deployment (30 minutes)
1. Upload all files to Hostinger via File Manager or FTP
2. In Hostinger control panel:
   - Go to "Advanced" → "Node.js"
   - Set Node.js version to 18.x or 20.x
   - Set startup file to `server.js`
   - Add environment variables in the Node.js settings

### Step 4: Environment Variables in Hostinger
Add these in Hostinger Node.js environment:
```
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://sanrico_user:YOUR_PASSWORD@your-cluster.mongodb.net/MyProductsDb?retryWrites=true&w=majority
DATABASE_NAME=MyProductsDb
JWT_SECRET=your_super_secure_jwt_secret_key_here
```

### Step 5: Test Connection (5 minutes)
1. Start your Node.js app in Hostinger
2. Check logs for successful MongoDB connection
3. Test API endpoints

## Important Notes:
- Your current MongoDB connection is already working locally
- The server.js has been updated to use environment variables
- Make sure to use the same database name "MyProductsDb" in Atlas
- Keep your existing collections: Products, PendingOrders, AcceptedOrders, DeliveredOrders
