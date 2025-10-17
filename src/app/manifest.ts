// app/manifest.ts
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Denton Flake',
    short_name: 'DF',
    description: 'Denton Flake\'s portfolio.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: 'hsl(210, 10%, 10%)',
    theme_color: 'hsl(210, 10%, 10%)',
    icons: [
      { src: '/images/profile.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/profile.png', sizes: '512x512', type: 'image/png' }
    ]
  };
}