// next.config.ts
import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/, // This allows Next.js to recognize `.mdx` and `.mdown` files
});

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  // Your existing config options
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'], // This allows `.mdx` files to be recognized as pages
  experimental: {
    mdxRs: true, // Ensure this experimental flag is set if you are using MDX with React Server Components
  },
};

export default withMDX(nextConfig); // Export the wrapped config