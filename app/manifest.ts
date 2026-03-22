import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Reviewer ni Psyduck',
    short_name: 'Psyduck CET',
    description: 'A comprehensive, modern reviewer for college entrance tests by Psyduck.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
