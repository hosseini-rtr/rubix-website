# 🏗️ Component Architecture

## Visual Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                        NAVIGATION                            │
│  ┌─────┐  ┌──────────────────────────┐  ┌──────────────┐   │
│  │Logo │  │ Home Solutions Tech About │  │ Get Started  │   │
│  └─────┘  └──────────────────────────┘  └──────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      HERO SECTION                            │
│                                                              │
│            ✨  Particle Animation Canvas  ✨                │
│                                                              │
│              ┌─────────────────────────────┐                │
│              │  Building the Future        │                │
│              │  with AI                    │ ← Animated     │
│              └─────────────────────────────┘                │
│                                                              │
│         Subtitle: Intelligent solutions description          │
│                                                              │
│      ┌──────────────────┐  ┌─────────────────────┐         │
│      │  Explore Our Work │  │  Get in Touch   →   │         │
│      └──────────────────┘  └─────────────────────┘         │
│                                                              │
│                         ⌄  Scroll                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    SERVICES GRID                             │
│                                                              │
│              Our Solutions Header                            │
│                                                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│  │   🧠         │ │    ⚡        │ │    🔮        │        │
│  │ AI Solutions │ │ Cloud Infra  │ │ Predictive   │        │
│  │              │ │              │ │ Analytics    │        │
│  └──────────────┘ └──────────────┘ └──────────────┘        │
│                                                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│  │   🎯         │ │    🛡️        │ │    🚀        │        │
│  │ Custom Dev   │ │ Cybersecurity│ │ Digital      │        │
│  │              │ │              │ │ Transform    │        │
│  └──────────────┘ └──────────────┘ └──────────────┘        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   TECHNOLOGY STACK                           │
│                                                              │
│          Technology Stack Header                             │
│                                                              │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐               │
│  │Next.js │ │Tailwind│ │TypeScrp│ │anime.js│               │
│  └────────┘ └────────┘ └────────┘ └────────┘               │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐               │
│  │ AI/ML  │ │ Cloud  │ │ Docker │ │K8s     │               │
│  └────────┘ └────────┘ └────────┘ └────────┘               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      ABOUT SECTION                           │
│                                                              │
│  ┌─────────────────────┐  ┌─────────────────────────┐      │
│  │ Innovation Meets    │  │  ┌─────────────────┐    │      │
│  │ Precision           │  │  │ 💡 Innovation   │    │      │
│  │                     │  │  │    First        │    │      │
│  │ Description text... │  │  └─────────────────┘    │      │
│  │ More text...        │  │                         │      │
│  │                     │  │  ┌─────────────────┐    │      │
│  │ ┌─────────────────┐ │  │  │ ⚡ Rapid        │    │      │
│  │ │Start Your Journey│ │  │  │    Execution    │    │      │
│  │ └─────────────────┘ │  │  └─────────────────┘    │      │
│  └─────────────────────┘  │                         │      │
│                            │  ┌─────────────────┐    │      │
│                            │  │ 🎯 Precision    │    │      │
│                            │  │    Engineering  │    │      │
│                            │  └─────────────────┘    │      │
│                            └─────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     CONTACT SECTION                          │
│                                                              │
│         Ready to Transform Your Vision?                      │
│                                                              │
│         Let's collaborate to build something                 │
│         extraordinary. The future is waiting.                │
│                                                              │
│      ┌──────────────┐       ┌────────────────┐             │
│      │ Get in Touch │       │ View Our Work  │             │
│      └──────────────┘       └────────────────┘             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                         FOOTER                               │
│  ┌───┐                                                       │
│  │ R │ Rubix         © 2025 Rubix     Twitter LinkedIn GitHub│
│  └───┘                                                       │
└─────────────────────────────────────────────────────────────┘
```

## Component Breakdown

### 1. **Layout Components**

```
├── layout.tsx (Root)
    └── Navigation
    └── page.tsx (Content)
        └── Footer
```

### 2. **Hero Section**

```
HeroSection
├── Canvas (Particle Animation)
├── Gradient Overlay
└── Content Container
    ├── Animated Title
    │   └── Staggered Words
    ├── Subtitle (delayed)
    └── CTA Buttons
        ├── NeonButton (primary)
        └── Text Link (secondary)
    └── Scroll Indicator
```

### 3. **Services Grid**

```
ServicesGrid
├── Section Header
│   ├── Title with Gradient
│   └── Subtitle
└── Grid Container
    └── ServiceCard × 6
        ├── Icon Container
        ├── Title
        ├── Description
        └── Hover Line
```

### 4. **Navigation**

```
Navigation
├── Container
│   ├── Logo
│   │   ├── Icon Box (gradient)
│   │   └── Text
│   ├── Nav Links
│   │   ├── Link × 5
│   │   └── Animated Underline
│   ├── CTA Button
│   └── Mobile Menu Toggle
└── Scroll-triggered Background
```

### 5. **Reusable Components**

#### NeonButton

```
NeonButton
├── Pulsing Ring (continuous animation)
├── Background Glow (hover)
├── Gradient Sweep (hover)
└── Button Content
    └── Children (text/icon)
```

#### SectionTransition

```
SectionTransition
└── Animated Container
    ├── Intersection Observer
    └── Children (any content)
```

## Data Flow

### Animation Triggers

```
Page Load
    → Hero Title Animation (staggered)
    → Hero Subtitle (delayed)
    → Hero CTA (elastic)

User Scroll
    → Navigation Background (50px threshold)
    → Section Reveals (Intersection Observer)
    → Card Stagger Animations

User Hover
    → Navigation Underline (follows cursor)
    → Card Glow Effect
    → Button Scale + Glow
```

### State Management

```
Navigation
├── isScrolled (boolean)
├── activeIndex (number)
└── underlineRef (ref)

HeroSection
├── canvasRef (ref)
└── particlesRef (ref)

ServiceCard
└── cardRef (ref for observer)

NeonButton
├── buttonRef (ref)
└── ringRef (ref)
```

## Styling System

### Utility Classes

```css
/* Custom Utilities */
.glass-card          → Glass-morphism effect
.neon-border         → Electric blue border + shadow
.text-glow           → Gradient text effect
.btn-primary         → Primary button styling
.section-container   → Max-width + padding

/* Tailwind Extensions */
.bg-deep-black       → #0a0a0a
.text-electric-blue  → #00d4ff
.shadow-neon         → Blue glow shadow
.animate-glow        → Pulsing glow animation;
```

### Animation Classes

```css
.animate-pulse-slow
  →
  3s
  pulse
  .animate-glow
  →
  Alternating
  intensity
  .animate-float
  →
  Vertical
  motion
  .animate-slide-up
  →
  Entrance
  from
  bottom
  .animate-fade-in
  →
  Opacity
  transition;
```

## Responsive Breakpoints

```
Mobile (<640px)
├── Single column
├── Reduced font sizes
├── Simplified nav (hamburger)
└── Touch-optimized buttons

Tablet (640-1023px)
├── Two columns
├── Medium fonts
├── Condensed nav
└── Full animations

Desktop (1024px+)
├── Multi-column grids
├── Full typography
├── Expanded nav
└── All effects enabled
```

## Performance Optimization

### Critical Path

```
1. Load fonts (preconnect)
2. Render Navigation (instant)
3. Paint Hero Section
4. Initialize Canvas
5. Start Particle Animation
6. Lazy load below-fold sections
```

### Animation Performance

```
✅ Use transform (GPU-accelerated)
✅ Use opacity (GPU-accelerated)
✅ RequestAnimationFrame for canvas
✅ Intersection Observer for reveals
❌ Avoid animating width/height
❌ Avoid excessive blur effects
```

## File Dependencies

```
page.tsx
├── Import: Navigation
├── Import: HeroSection
├── Import: ServicesGrid
├── Import: SectionTransition
├── Import: NeonButton
└── Import: globals.css

Components
├── Navigation → anime.js
├── HeroSection → anime.js
├── ServicesGrid → anime.js, ServiceCard
├── NeonButton → anime.js
└── SectionTransition → anime.js

Styles
├── globals.css → Tailwind directives
└── tailwind.config.js → Design tokens
```

---

**This architecture ensures:**

- 🎨 Consistent design system
- ⚡ Optimal performance
- 🔧 Easy customization
- 📱 Responsive layouts
- ♿ Accessible interactions
