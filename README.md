# React + TypeScript + Vite + shadcn/ui

This is a template for a new Vite project with React, TypeScript, and shadcn/ui.

## Demo

https://shadcn-vite-geist.vercel.app/

## Fonts

To add Geist:

```bash
pnpm install @fontsource-variable/geist
```

Then add the following to your `index.css`:

```css
@import "@fontsource-variable/geist";
```

Update the `theme` section in `index.css` to use the new font:

```css
@theme inline {
  --font-sans: 'Geist Variable', sans-serif;
}
```
