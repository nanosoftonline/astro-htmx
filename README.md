# Astro-HTMX Project

In this project we discuss how we can use HTMX with Astro.

## Setup Astro Project
```bash
npm create astro@latest
```
You can run create astro anywhere on your machine, so there’s no need to create a new empty directory for your project before you begin. If you don’t have an empty directory yet for your new project, the wizard will help create one for you automatically.


## Configure Astro Server for a Dynamic HTML(Web Application)
Because we need server-side rendering (SSR) for HTMX, we need to enable the Astro project for on-demand server rendering.

```mjs
//astro.config.mjs
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});
```
The application will now run like an Express App instead of a static website.


## Integrate TailwindCSS 
To help with styling let's further configure the project and include tailwindcss integration.

```bash
pnpm astro add tailwind

```

This will allow us to add TailwindCSS classes to our HTML elements