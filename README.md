# Rubix - Futuristic AI & Software Startup Website

A cutting-edge, minimalist web interface built with Next.js, TailwindCSS, and anime.js, featuring ultra-modern sci-fi aesthetics that blend technology with elegance.

## � Rubix Core - Official Website

## Complete Implementation Based on SITEMAP.md

A **production-ready**, fully-functional Next.js website for Rubix Core featuring:

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS 3.4
- **Animation**: anime.js 3.2
- **Language**: TypeScript
- **Fonts**: Space Grotesk, Inter (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
rubix-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── HeroSection.tsx     # Hero with particle animation
│   │   ├── Navigation.tsx      # Floating nav bar
│   │   ├── ServicesGrid.tsx    # Glass card grid
│   │   ├── NeonButton.tsx      # Pulsing CTA button
│   │   └── SectionTransition.tsx # Scroll animations
│   └── styles/
│       └── globals.css         # Tailwind + custom styles
├── tailwind.config.js          # Design tokens & theme
├── tsconfig.json
├── next.config.js
└── package.json
```

## 🎭 Design Tokens

### Colors

```js
{
  'deep-black': '#0a0a0a',
  'matte-black': '#141414',
  'soft-gray': '#1f1f1f',
  'electric-blue': '#00d4ff',
  'neon-cyan': '#00ffff',
}
```

### Shadows

- `neon-sm`: Subtle blue glow
- `neon`: Medium intensity
- `neon-lg`: Strong glow effect
- `glass`: Glass-morphism shadow
- `depth`: Deep elevation shadow

### Animations

- `pulse-slow`: 3s gentle pulse
- `glow`: Alternating glow intensity
- `float`: Vertical floating motion
- `slide-up`: Entrance from bottom
- `fade-in`: Opacity transition

## 🎬 Animation Philosophy

1. **Subtle Energy**: Animations should feel alive but not distracting
2. **Smooth Easing**: Use `easeOutExpo` and `easeOutQuad` for natural motion
3. **Staggered Reveals**: Create depth with sequential animations
4. **Performance First**: Use `will-change` and GPU-accelerated properties
5. **Intersection Observer**: Trigger animations only when visible

## 🎨 Component Usage

### Hero Section

```tsx
<HeroSection />
```

Features particle canvas, animated title, and CTA buttons.

### Navigation

```tsx
<Navigation />
```

Floating nav with animated underline and scroll effects.

### Services Grid

```tsx
<ServicesGrid />
```

Displays services in glass-morphism cards with staggered animations.

### Neon Button

```tsx
<NeonButton href="/contact">Get Started</NeonButton>
<NeonButton variant="secondary">Learn More</NeonButton>
```

### Section Transition

```tsx
<SectionTransition delay={200} direction="up">
  <YourContent />
</SectionTransition>
```

## 🎯 Design Principles

1. **Minimalism**: Every element serves a purpose
2. **Geometry**: Strong shapes and alignment
3. **Contrast**: High contrast for readability
4. **Motion**: Smooth, purposeful animations
5. **Depth**: Layered glass effects create visual hierarchy
6. **Energy**: Subtle glows suggest computational power

## 🌐 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Flexible grid layouts
- Touch-optimized interactions

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.js`:

```js
colors: {
  'electric-blue': '#YOUR_COLOR',
  'neon-cyan': '#YOUR_COLOR',
}
```

### Adjusting Animations

Modify timing in `tailwind.config.js`:

```js
animation: {
  'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
```

### Custom Particles

Edit `HeroSection.tsx`:

```js
const particleCount = 80; // Increase/decrease particles
```

## 📊 Performance Optimization

- Server-side rendering with Next.js
- Canvas animations use `requestAnimationFrame`
- Intersection Observer for lazy animations
- Optimized Tailwind with purging
- `will-change` for GPU acceleration

## 🚢 Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Other Platforms

```bash
npm run build
npm start
```

Deploy the `.next` folder to your hosting platform.

## 📝 License

MIT License - feel free to use for your projects!

## 🎨 Credits

- Design Inspiration: Apple, Blade Runner, Cyberpunk aesthetics
- Fonts: Google Fonts (Space Grotesk, Inter)
- Animation Library: anime.js by Julian Garnier

---

**Built with ⚡ by the future, for the future.**
