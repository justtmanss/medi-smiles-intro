# MediSmiles - Coming Soon Page

A modern, responsive landing page for MediSmiles, a healthcare startup focused on innovative medical solutions.

## Features

- 🎨 Modern UI with premium design elements
- 📱 Fully responsive across all devices
- 📧 Email subscription system with CSV storage
- 🎯 Coming soon notification system
- ⚡ Built with Vite and React
- 🎭 Custom animations and transitions
- 🎨 Carefully crafted color scheme for healthcare

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## Color Palette

- Deep Sapphire Blue (`#0F4C81`) - Primary color for text and headings
- Emerald Green (`#0F3D38`) - Secondary color for accents
- Champagne Gold (`#EBCE71`) - Accent color for CTAs
- Ivory White (`#F9F6EF`) - Background color
- Charcoal Gray (`#4A4A4A`) - Text color
- Blush Pink (`#FFC1C1`) - Subtle accents

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── EmailSignup/    # Email subscription components
│   ├── Features/       # Feature grid components
│   ├── Header/         # Logo and header components
│   └── Footer/         # Footer component
├── utils/
│   └── csvHelper.ts    # Email storage utility
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Email Subscription System

The application includes a simple email subscription system that:
- Validates email addresses
- Stores subscriptions in a CSV file
- Provides user feedback via a modal dialog
- Handles errors gracefully

## Design Choices

- **Typography**: Playfair Display for headings paired with Roboto for body text
- **Layout**: Clean, minimal design with focus on content hierarchy
- **Animations**: Subtle transitions for enhanced user experience
- **Accessibility**: High contrast ratios and semantic HTML
- **Mobile-first**: Responsive design optimized for all screen sizes

## Development

- Run `npm run dev` for development
- Run `npm run build` for production build
- Run `npm run preview` to preview production build

## License

© 2024 MediSmiles. All rights reserved.