# Dual-Track Portfolio (UI/UX Design & Frontend Engineering)

A modern, high-performance web portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Vanilla CSS Design Tokens**.

## 🌟 Key Features

1. **Dual Track Portfolio Switcher**:
   - **🎨 UI/UX Design Track**: Dedicated section for design systems, Figma file/prototype links, UX research, wireframes, and case studies.
   - **💻 Frontend Engineering Track**: Dedicated section for live production web apps, Next.js/React architectures, GitHub code repositories, and Lighthouse metrics.
   - **All Works**: Combined overview with interactive domain badges.

2. **Interactive In-App Customization & Edit Mode**:
   - **Profile Picture Changer**: Upload a photo from your computer (persisted via LocalStorage) or paste an image URL directly.
   - **Live Project Editor**: Add, modify, or delete any UI/UX or Frontend project directly from the interface.
   - **Contact Details Customizer**: Update your WhatsApp number, pre-filled WhatsApp message, Email address, and social links (Figma, GitHub, LinkedIn).
   - **Backup & Reset**: Export your portfolio data as JSON or restore it at any time.

3. **Instant Direct Contact**:
   - **Direct WhatsApp Chat**: One-click connection to WhatsApp (`wa.me`) with custom greeting text.
   - **Email Integration**: Direct `mailto` link and one-click "Copy Email" with toast feedback.
   - **Interactive Contact Form**: Project type selector (UI/UX, Frontend, or Full Stack) and pre-filled email composition.

4. **Modern Design System & Themes**:
   - Switchable **Dark & Light Mode** with smooth CSS variable transitions.
   - Glassmorphic frosted cards, subtle neon glows, and micro-animations.

---

## 🚀 How to Run Locally

### Option 1: From the Root Directory
```bash
npm run dev
```

### Option 2: From the `portfolio-web` Directory
```bash
cd portfolio-web
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build for Production

```bash
cd portfolio-web
npm run build
npm run start
```
