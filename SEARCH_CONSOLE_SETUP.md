# Google Search Console Setup - Step-by-Step Guide

## What is Google Search Console?

**Simple explanation:** It's Google's free tool that shows you:
- How Google sees your website
- Which pages are indexed (found by Google)
- What people search for to find you
- Any problems Google finds
- How many people click on your site in search results

**Why it matters:** Without it, you're invisible to Google. With it, you can see exactly how you're performing and fix any issues.

---

## Step 1: Go to Google Search Console

1. Open your browser
2. Go to: [search.google.com/search-console](https://search.google.com/search-console)
3. Sign in with the **same Google account** you used for Google Business Profile

---

## Step 2: Add Your Property

**When you first arrive:**

1. You'll see a welcome screen
2. Click **"Add property"** button (usually top right or center)
3. You'll see two options:
   - **Domain** (for entire domain)
   - **URL prefix** (for specific URL)

**Choose: "URL prefix"** (easier to verify)

4. Enter your website URL:
   ```
   https://www.nassiraproperties.com
   ```
   - Make sure to include `https://` and `www.`
   - Click **"Continue"**

---

## Step 3: Verify Ownership

**This proves you own the website. Google will give you options:**

### Option A: HTML Tag (Easiest - Recommended)

1. Google will show you a code that looks like:
   ```
   <meta name="google-site-verification" content="abc123xyz789..." />
   ```

2. **Copy that entire line** (the meta tag)

3. **Add it to your website:**
   - Open: `app/layout.tsx`
   - Find the `<head>` section (around line 110)
   - Add the meta tag inside `<head>`, like this:

   ```tsx
   <head>
     <link
       rel="preload"
       href="/_next/static/media/eb-garamond-latin-400-normal.woff2"
       as="font"
       type="font/woff2"
       crossOrigin="anonymous"
     />
     {/* Add your verification tag here */}
     <meta name="google-site-verification" content="YOUR_CODE_HERE" />
     <script
       type="application/ld+json"
       dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
     />
   </head>
   ```

4. **Save the file**

5. **Deploy your site** (if using Vercel, it auto-deploys on git push)

6. **Go back to Search Console** and click **"Verify"**

7. ✅ If successful, you'll see "Ownership verified"

---

### Option B: DNS Verification (If you have domain access)

**If HTML tag doesn't work or you prefer DNS:**

1. Google will give you a TXT record to add
2. Go to your domain registrar (where you bought nassiraproperties.com)
3. Find DNS settings
4. Add a TXT record with Google's code
5. Wait 24-48 hours for DNS to propagate
6. Click "Verify" in Search Console

---

## Step 4: Submit Your Sitemap

**This tells Google all the pages on your site:**

1. In Search Console, look for **"Sitemaps"** in the left menu
2. Click **"Sitemaps"**
3. You'll see a field that says "Add a new sitemap"
4. Enter:
   ```
   sitemap.xml
   ```
   (Just `sitemap.xml` - not the full URL)
5. Click **"Submit"**
6. You should see: "Successfully submitted: sitemap.xml"

**Note:** It may take 24-48 hours for Google to process it. That's normal!

---

## Step 5: Request Indexing for Key Pages

**This asks Google to crawl your most important pages:**

1. In Search Console, find **"URL Inspection"** in the left menu (or top search bar)
2. Enter your homepage URL:
   ```
   https://www.nassiraproperties.com
   ```
3. Click **"Enter"** or the search icon
4. Google will check if the page is indexed
5. If it says "URL is not on Google", click **"Request Indexing"**
6. If it says "URL is on Google", you're good!

**Repeat for these key pages:**
- `https://www.nassiraproperties.com/buy`
- `https://www.nassiraproperties.com/sell`
- `https://www.nassiraproperties.com/invest`
- `https://www.nassiraproperties.com/about`
- `https://www.nassiraproperties.com/contact`

---

## Step 6: Check Your Site is Working

**After 24-48 hours, check:**

1. Go to **"Coverage"** in left menu
2. You should see:
   - ✅ Pages indexed
   - ✅ Sitemap processed
   - ⚠️ Any errors (if there are any, we'll fix them)

---

## What You'll See in Search Console

### Main Dashboard:
- **Total clicks** - How many people clicked your site from Google
- **Total impressions** - How many times your site appeared in search
- **Average position** - Where you rank (lower is better, #1 is best)
- **CTR** - Click-through rate (clicks ÷ impressions)

### Left Menu:
- **Performance** - See your search results
- **Coverage** - Which pages are indexed
- **Sitemaps** - Your sitemap status
- **URL Inspection** - Check individual pages
- **Enhancements** - Rich results, mobile usability

---

## Common Issues & Fixes

### "Verification failed"
- **Check:** Make sure you added the meta tag correctly
- **Check:** Make sure your site is live and accessible
- **Try:** Use DNS verification instead

### "Sitemap couldn't be fetched"
- **Check:** Visit `https://www.nassiraproperties.com/sitemap.xml` in browser
- **Should see:** XML with your pages listed
- **If error:** The sitemap might not be deployed yet

### "URL not indexed"
- **Wait:** Can take 24-48 hours
- **Check:** Make sure page is accessible (no password protection)
- **Request:** Use "Request Indexing" button

### "No data yet"
- **Normal:** Takes 1-3 days to see data
- **Check back:** Tomorrow or day after
- **Make sure:** Sitemap is submitted and processed

---

## What to Do After Setup

### Week 1:
- ✅ Check daily for any errors
- ✅ Request indexing for new pages
- ✅ Monitor if pages are being indexed

### Week 2:
- ✅ Check Performance tab for impressions/clicks
- ✅ Look for any coverage errors
- ✅ See what keywords people use to find you

### Monthly:
- ✅ Review performance trends
- ✅ Fix any errors
- ✅ Check Core Web Vitals
- ✅ See which pages perform best

---

## Quick Checklist

- [ ] Go to search.google.com/search-console
- [ ] Sign in with Google account
- [ ] Click "Add property"
- [ ] Choose "URL prefix"
- [ ] Enter: `https://www.nassiraproperties.com`
- [ ] Copy verification code
- [ ] Add to `app/layout.tsx` in `<head>` section
- [ ] Deploy site
- [ ] Click "Verify" in Search Console
- [ ] Go to "Sitemaps"
- [ ] Submit: `sitemap.xml`
- [ ] Use "URL Inspection" to request indexing for key pages
- [ ] Wait 24-48 hours
- [ ] Check back to see data!

---

## Need Help?

**If you get stuck:**
1. Take a screenshot of what you see
2. Tell me which step you're on
3. I'll help you troubleshoot

**Common questions:**
- "Where do I find the verification code?" → It's shown right after you add property
- "How do I add it to my site?" → Edit `app/layout.tsx`, add to `<head>`
- "How long does it take?" → Verification: instant, Indexing: 24-48 hours
- "What if it doesn't work?" → Try DNS verification or check site is live

---

## Next Steps After Setup

Once Search Console is set up:
1. ✅ Wait 24-48 hours for data
2. ✅ Check for any errors
3. ✅ See what keywords bring traffic
4. ✅ Monitor performance weekly

**Then we can talk about Google Ads!** 🚀

---

**Ready to start?** Go to [search.google.com/search-console](https://search.google.com/search-console) and follow the steps above!

