# 🚀 Quick Start Guide

Get your futuristic AI startup website running in minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install:

- ✅ Next.js 14
- ✅ React 18
- ✅ TailwindCSS 3.4
- ✅ anime.js 3.2
- ✅ TypeScript

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 3: Customize Your Content

### Update Brand Name

1. Open `src/components/Navigation.tsx`
2. Change "Rubix" to your company name
3. Update the logo letter in the gradient box

### Modify Hero Section

1. Open `src/components/HeroSection.tsx`
2. Update the title: `'Building the Future with AI'` → Your headline
3. Update the subtitle description

### Edit Services

1. Open `src/components/ServicesGrid.tsx`
2. Modify the `services` array with your offerings
3. Change icons, titles, and descriptions

### Adjust Colors (Optional)

1. Open `tailwind.config.js`
2. Modify colors in the `extend.colors` section
3. Keep the same naming convention

## Step 4: Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Features At a Glance

### Hero Section

- Animated particle network
- Glowing connection lines
- Staggered text reveal
- Dual CTA buttons

### Navigation

- Glass-morphism effect
- Animated underline on hover
- Scroll-triggered backdrop blur

### Service Cards

- Glass-effect containers
- Intersection observer animations
- Neon glow on hover

### CTA Buttons

- Continuous pulsing ring
- Multi-layer hover effects
- Gradient sweep animation

### Section Transitions

- Scroll-triggered reveals
- Directional animations
- Configurable delays

## 📁 File Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage
├── components/
│   ├── HeroSection.tsx      # Hero with particles
│   ├── Navigation.tsx       # Floating nav bar
│   ├── ServicesGrid.tsx     # Service cards grid
│   ├── NeonButton.tsx       # Pulsing CTA button
│   └── SectionTransition.tsx # Scroll animations
└── styles/
    └── globals.css          # Tailwind config
```

## 🎯 Common Customizations

### Change Particle Count

```tsx
// In HeroSection.tsx
const particleCount = 80; // Increase or decrease
```

### Adjust Animation Speed

```js
// In tailwind.config.js
animation: {
  'pulse-slow': 'pulse 3s ...', // Change duration
}
```

### Modify Section Spacing

```tsx
// In page.tsx
<SectionTransition delay={200}> // Adjust delay
```

### Update Footer

```tsx
// In page.tsx, bottom section
// Change copyright, links, and social media
```

## 🌐 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Done! Your site is live. ✨

## 📊 Performance Tips

- ✅ Keep particle count under 100
- ✅ Use WebP images when adding photos
- ✅ Lazy load sections below the fold
- ✅ Enable Vercel Analytics for monitoring

## 🎨 Design Resources

- **Fonts**: [Google Fonts](https://fonts.google.com)
- **Icons**: Use emoji or add [Lucide Icons](https://lucide.dev)
- **Images**: [Unsplash](https://unsplash.com) for high-quality photos

## 📝 Next Steps

1. ✅ Install and run (`npm install` → `npm run dev`)
2. ⬜ Customize content (hero, services, about)
3. ⬜ Add your brand colors
4. ⬜ Replace placeholder content
5. ⬜ Test on mobile devices
6. ⬜ Deploy to production

## 🆘 Troubleshooting

### Port Already in Use

```bash
npm run dev -- -p 3001
```

### CSS Not Loading

```bash
rm -rf .next
npm run dev
```

### Type Errors

```bash
npm install --save-dev @types/animejs
```

## 💡 Pro Tips

1. **Preview Animations**: Slow your browser's animation speed in DevTools
2. **Mobile First**: Test on mobile devices early
3. **Accessibility**: Use Chrome Lighthouse for audits
4. **Performance**: Keep an eye on bundle size

---

**Ready to launch?** 🚀

Your futuristic, minimalist AI startup website is ready to impress!
