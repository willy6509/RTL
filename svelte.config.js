import adapter from '@sveltejs/adapter-vercel';  // Menggunakan adapter untuk Vercel
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),  // Pastikan menggunakan adapter Vercel
  },
  preprocess: vitePreprocess(),
};

export default config;
