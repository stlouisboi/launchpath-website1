# LaunchPath Favicon Generation Guide

To ensure high-quality branding across all devices, follow these instructions to generate the necessary icon files from your master logo: `Launch path logo.png`.

## Required Assets
The website expects the following files in the root directory:
1. `favicon.ico` (Multi-resolution: 16x16, 32x32, 48x48)
2. `favicon-16x16.png`
3. `favicon-32x32.png`
4. `apple-touch-icon.png` (180x180)
5. `android-chrome-192x192.png`
6. `android-chrome-512x512.png`

## Automated Asset Generation (Recommended)
If you have ImageMagick installed, you can generate the requested Android assets with a single command to ensure the black background and margins are perfect:

```bash
# Generate android-chrome-192x192.png
magick "Launch path logo.png" -background "#101010" -alpha remove -bordercolor "#101010" -border 15% -resize 192x192! android-chrome-192x192.png

# Generate android-chrome-512x512.png
magick "Launch path logo.png" -background "#101010" -alpha remove -bordercolor "#101010" -border 15% -resize 512x512! android-chrome-512x512.png
```

## Manual Generation (Web Tool)
1. **Tooling**: Use [RealFaviconGenerator.net](https://realfavicongenerator.net/).
2. **Input**: Upload `Launch path logo.png`.
3. **Android Settings**:
   - **Background**: Select a solid black background (`#101010`).
   - **Margins**: Set "Add margin" to approximately **15%** to ensure the logo is contained within the "safe zone" for maskable icons.
4. **Implementation**: Download the generated package and place the files in the project root.

## Fallback Mechanism
The `index.html` includes a hardcoded SVG fallback:
```html
<link rel="icon" href="data:image/svg+xml,...">
```
This ensures that even if the physical files are missing or fail to load, a stylized "L" icon in the brand's red and black will appear in the browser tab.

## Web Manifest
The `site.webmanifest` file is already configured to link these icons for PWA and mobile home-screen installs.
