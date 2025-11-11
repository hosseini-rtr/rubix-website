# 🚀 Rubix Core - Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended - Easiest)

#### One-Click Deploy:

```bash
npm install -g vercel
vercel
```

Follow the prompts:

- Link to your Git repository
- Configure build settings (auto-detected)
- Deploy!

Your site will be live at: `https://your-project.vercel.app`

#### Custom Domain:

In Vercel dashboard:

- Go to Settings → Domains
- Add your custom domain (e.g., rubixcore.com)
- Update DNS records as instructed

---

### 2. Netlify

#### Deploy from Git:

1. Push code to GitHub/GitLab
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

---

### 3. Self-Hosted (VPS/Cloud)

#### Prerequisites:

- Node.js 18+ installed
- PM2 for process management

#### Steps:

**1. Build the application:**

```bash
npm run build
```

**2. Install PM2:**

```bash
npm install -g pm2
```

**3. Create ecosystem config:**

```javascript
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "rubix-website",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
```

**4. Start with PM2:**

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

**5. Configure Nginx (reverse proxy):**

```nginx
# /etc/nginx/sites-available/rubixcore.com
server {
    listen 80;
    server_name rubixcore.com www.rubixcore.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**6. Enable site:**

```bash
sudo ln -s /etc/nginx/sites-available/rubixcore.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**7. SSL with Certbot:**

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d rubixcore.com -d www.rubixcore.com
```

---

## Environment Variables

Create `.env.local` for production:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (if integrated)
CONTACT_FORM_ENDPOINT=your-api-endpoint
EMAIL_SERVICE_API_KEY=your-key

# Optional
NEXT_PUBLIC_SITE_URL=https://rubixcore.com
```

---

## Performance Optimization

### 1. Image Optimization

Already configured with Next.js Image component.

### 2. Font Optimization

Fonts are loaded from Google Fonts with `display=swap`.

### 3. Code Splitting

Automatic with Next.js App Router.

### 4. Caching Headers

Configure in `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
```

---

## SEO Checklist

- ✅ Metadata configured per page
- ✅ OpenGraph tags added
- ✅ Twitter cards configured
- ✅ Robots.txt (create if needed)
- ✅ Sitemap.xml (generate with next-sitemap)

### Generate Sitemap:

```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:

```javascript
module.exports = {
  siteUrl: "https://rubixcore.com",
  generateRobotsTxt: true,
};
```

Add to `package.json`:

```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

---

## Monitoring & Analytics

### Recommended Tools:

1. **Vercel Analytics** (if on Vercel)
2. **Google Analytics 4**
3. **Plausible** (privacy-friendly)
4. **Sentry** (error tracking)

### Add to `layout.tsx`:

```tsx
import Script from "next/script";

// In layout
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>;
```

---

## Contact Form Integration

### Options:

**1. Formspree (Easiest):**

```tsx
<form action="https://formspree.io/f/your-id" method="POST">
  {/* form fields */}
</form>
```

**2. EmailJS:**

```bash
npm install @emailjs/browser
```

**3. Custom API Route:**
Create `/app/api/contact/route.ts`:

```typescript
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // Send email via your service
  return NextResponse.json({ success: true });
}
```

---

## Booking System Integration

### SimplyBook.me Integration:

Add widget to contact page:

```tsx
<iframe
  src="https://your-company.simplybook.me"
  width="100%"
  height="600px"
  frameBorder="0"
/>
```

### Calendly Integration:

```bash
npm install react-calendly
```

```tsx
import { InlineWidget } from "react-calendly";

<InlineWidget url="https://calendly.com/your-link" />;
```

---

## Maintenance

### Update Dependencies:

```bash
npm outdated
npm update
```

### Security Audit:

```bash
npm audit
npm audit fix
```

### Performance Check:

- Run Lighthouse in Chrome DevTools
- Check Core Web Vitals
- Monitor bundle size

---

## Backup Strategy

1. **Code**: Git repository (GitHub/GitLab)
2. **Database**: If added, use automated backups
3. **Assets**: Store in cloud (S3/Cloudflare R2)

---

## Support Contacts

- **Technical Issues**: Create GitHub issue
- **Hosting Support**: Contact your provider
- **SSL Issues**: Check Certbot documentation

---

## Launch Checklist

- [ ] Domain purchased and DNS configured
- [ ] SSL certificate installed
- [ ] Analytics tracking added
- [ ] Contact form functional
- [ ] All links working
- [ ] Mobile responsive tested
- [ ] Performance optimized (Lighthouse score 90+)
- [ ] SEO metadata verified
- [ ] Social sharing tested
- [ ] 404 page customized
- [ ] Backup strategy in place

---

## Post-Launch

1. Submit to search engines:

   - Google Search Console
   - Bing Webmaster Tools

2. Set up monitoring:

   - Uptime monitoring (UptimeRobot)
   - Performance monitoring (Vercel/Netlify)

3. Regular updates:
   - Content updates
   - Security patches
   - Dependency updates

---

**Need Help?** Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
