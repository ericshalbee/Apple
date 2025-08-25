# Apple Pay Support - Astro Site

A high-performance, SEO-optimized static site built with Astro for Apple Pay customer service support.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:4321`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
astro-site/
├── public/
│   ├── apple.png          # Logo and favicon
│   └── robots.txt         # Search engine directives
├── src/
│   ├── components/
│   │   ├── Header.astro   # Site header
│   │   ├── Footer.astro   # Site footer
│   │   ├── PhoneSupport.astro  # Phone support section
│   │   └── FAQSection.tsx # Interactive FAQ component
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base HTML layout with SEO
│   └── pages/
│       ├── index.astro         # Home page
│       ├── apple-cash-support.astro
│       ├── apple-card-support.astro
│       └── apple-wallet-support.astro
├── astro.config.mjs       # Astro configuration
├── netlify.toml          # Netlify deployment config
└── tailwind.config.cjs   # Tailwind CSS config
```

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build/) - Static Site Generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icons
- **Deployment**: [Netlify](https://netlify.com/) - Static hosting
- **SEO**: Built-in sitemap, robots.txt, meta tags, structured data

## 🎯 Features

### Performance
- ⚡ Static Site Generation (SSG)
- 📦 Automatic code splitting
- 🖼️ Optimized asset loading
- 🎨 CSS purging and minification
- 📱 Mobile-first responsive design

### SEO Optimization
- 🔍 Complete meta tag coverage
- 📊 Structured data ready (JSON-LD)
- 🗺️ Automatic sitemap generation
- 🤖 Robots.txt configuration
- 🔗 Canonical URLs
- 📱 Open Graph and Twitter Cards

### User Experience
- 🎨 Consistent design system
- ♿ Accessibility optimized
- 🌙 Fast loading times
- 📱 Mobile responsive
- 🔄 Interactive components where needed

## 🚀 Deployment

### Netlify Deployment (Recommended)

1. **Connect Repository**
   - Link your Git repository to Netlify
   - Netlify will auto-detect Astro settings

2. **Build Settings** (Auto-configured via netlify.toml)
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Environment Variables** (if needed)
   ```
   NODE_VERSION=18
   ```

4. **Custom Domain** (Optional)
   - Update `site` URL in `astro.config.mjs`
   - Configure DNS settings
   - Update robots.txt sitemap URL

### Manual Deployment

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder**
   - Upload contents of `dist/` to your web server
   - Ensure server supports SPA routing (if needed)

## 🔧 Configuration

### Site Configuration

Update `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://your-domain.com', // Your actual domain
  // ... other config
});
```

### SEO Configuration

Update meta tags in `src/layouts/BaseLayout.astro`:
- Site title and description
- Keywords and canonical URLs
- Social media images
- Structured data

### Styling Configuration

Customize Tailwind in `tailwind.config.cjs`:
- Brand colors
- Typography scales
- Spacing system
- Responsive breakpoints

## 📊 Performance Targets

### Lighthouse Scores
- **Performance**: 95-100
- **Accessibility**: 95-100  
- **Best Practices**: 95-100
- **SEO**: 95-100

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 1.2s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 🛠️ Development

### Adding New Pages

1. Create new `.astro` file in `src/pages/`
2. Use `BaseLayout` for consistent SEO:
   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   ---
   
   <BaseLayout 
     title="Page Title"
     description="Page description"
     keywords="relevant, keywords"
   >
     <!-- Page content -->
   </BaseLayout>
   ```

3. Update navigation in `Header.astro`

### Adding Interactive Components

For components requiring client-side JavaScript:

1. Create `.tsx` file in `src/components/`
2. Use in `.astro` files with `client:load` directive:
   ```astro
   <MyComponent client:load />
   ```

### Styling Guidelines

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing (Tailwind scale)
- Use semantic HTML elements
- Ensure proper color contrast

## 🔍 SEO Best Practices

### Content
- Write descriptive, unique titles (50-60 characters)
- Create compelling meta descriptions (150-160 characters)
- Use proper heading hierarchy (H1 → H6)
- Include relevant keywords naturally
- Add alt text to all images

### Technical
- Ensure fast loading times (< 3s)
- Optimize images (WebP format recommended)
- Use semantic HTML structure
- Implement structured data
- Create XML sitemap
- Configure robots.txt

### Monitoring
- Set up Google Search Console
- Monitor Core Web Vitals
- Track keyword rankings
- Analyze user behavior
- Regular performance audits

## 🐛 Troubleshooting

### Build Issues
- Clear node_modules and reinstall dependencies
- Check Node.js version (18+ required)
- Verify all imports are correct
- Check for TypeScript errors

### Styling Issues
- Purge Tailwind cache: `npm run build`
- Check class name spelling
- Verify responsive breakpoints
- Test in multiple browsers

### Performance Issues
- Optimize images (use WebP format)
- Minimize JavaScript usage
- Check for unused CSS
- Monitor bundle size

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Google SEO Guide](https://developers.google.com/search/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.