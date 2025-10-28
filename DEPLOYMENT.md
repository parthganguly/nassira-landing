# Deployment Instructions

## Quick Deploy to Vercel

1. **Visit Vercel**: Go to https://vercel.com and sign up/login with GitHub

2. **Import Project**: 
   - Click "Add New Project"
   - Connect your GitHub account
   - Find this repository and click Import

3. **Configure Build**: 
   - Framework: Next.js (auto-detected)
   - Install Command: `npm install --legacy-peer-deps`
   - Build Command: `npm run build`

4. **Deploy**: Click "Deploy" and wait for the build to complete

## Alternative: Deploy via CLI

```bash
# Complete the login (opens browser)
npx vercel login

# Deploy
npx vercel --prod
```

## After Deployment

The site will be available at a URL like: `https://nassira-landing.vercel.app`

## Features

✅ **Auto-updating listings**: The `/api/listings` endpoint fetches real properties from PropertyFinder
✅ **Self-updates**: Automatically fetches all 59+ listings every hour  
✅ **Caching**: Results are cached for 1 hour to reduce API calls
✅ **Fallback**: If scraping fails, shows static data
✅ **Contact forms**: Working contact and valuation forms
✅ **Fully responsive**: Mobile and desktop optimized

## Notes

- The API auto-updates listings by scraping PropertyFinder
- Cache refreshes every 1 hour
- Total listings fetched from all pages (up to 59 active listings)

