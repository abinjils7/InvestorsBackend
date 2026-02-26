# Deployment Guide

This guide describes how to deploy the application to Production using Render (Backend) and Vercel (Frontend).

## 1. Backend (Render)

1. **Dashboard**: Navigate to [Render Dashboard](https://dashboard.render.com/).
2. **New Web Service**: Connect your GitHub repository.
3. **Configuration**:
    - **Build Command**: `npm install && npm run build` (Run in the `server` directory)
    - **Start Command**: `npm start`
4. **Environment Variables**:
    - `MONGO_URI`: Your MongoDB connection string.
    - `JWT_ACCESS_SECRET`: A secure random string.
    - `JWT_REFRESH_SECRET`: Another secure random string.
    - `CLIENT_URL`: Your Vercel frontend URL (e.g., `https://your-app.vercel.app`).
    - `PORT`: `5000` (Render will override this, but good to have).
    - `EMAIL_USER`: Your email address.
    - `EMAIL_PASS`: Your email app password.
    - `GOOGLE_CLIENT_ID`: Your Google OAuth Client ID.
    - `GOOGLE_CLIENT_SECRET`: Your Google OAuth Client Secret.
    - `RAZORPAY_KEY_ID`: Your Razorpay Key ID.
    - `RAZORPAY_KEY_SECRET`: Your Razorpay Key Secret.
    - `CLOUDINARY_CLOUD_NAME`: Your Cloudinary Cloud Name.
    - `CLOUDINARY_API_KEY`: Your Cloudinary API Key.
    - `CLOUDINARY_API_SECRET`: Your Cloudinary API Secret.

## 2. Frontend (Vercel)

1. **Dashboard**: Navigate to [Vercel Dashboard](https://vercel.com/dashboard).
2. **New Project**: Connect your GitHub repository.
3. **Configuration**:
    - **Root Directory**: `client`
    - **Framework Preset**: `Vite`
4. **Environment Variables**:
    - `VITE_BACKEND_URL`: Your Render backend URL (e.g., `https://your-backend.onrender.com`).
    - `VITE_RAZORPAY_KEY_ID`: Your Razorpay Key ID.

## Important Notes
- Ensure all environment variables are set in both dashboards before deploying.
- The `vercel.json` file in the `client` directory handles SPA routing (redirecting all routes to `index.html`).
- The `server` handles CORS and Socket.io origins using the `CLIENT_URL` environment variable.
