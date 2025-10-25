# Render.com Deployment Guide (5 minutes)

## Step 1: Go to Render.com
1. Visit [render.com](https://render.com/)
2. Sign up with GitHub (free)

## Step 2: Deploy Your App
1. Click "New" → "Web Service"
2. Connect your GitHub repository
3. Select your repository
4. Configure:
   - **Name**: `sanrico-backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`

## Step 3: Set Environment Variables
In Render dashboard → Environment tab, add:
```
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://24uglyandrew:weaklings162@sanricosite.vgnc0qj.mongodb.net/
DATABASE_NAME=MyProductsDb
JWT_SECRET=your_super_secure_jwt_secret_key_here
```

## Step 4: Deploy
1. Click "Create Web Service"
2. Wait for deployment (2-3 minutes)
3. Get your URL: `https://sanrico-backend.onrender.com`

## Step 5: Update Frontend URLs
Update your JavaScript files to use the new Render URL instead of Railway.

## Notes:
- Render free tier: 750 hours/month
- App sleeps after 15 minutes of inactivity
- First request after sleep takes ~30 seconds
- Perfect for your use case!
