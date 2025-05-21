/** @type {import('next').NextConfig} */
const nextConfig = {
   
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          port: '', // Leave empty if no specific port is needed
          pathname: '/**', // Allows all paths under the domain
        },
        {
          protocol: 'https',
          hostname: 'videos.ctfassets.net',
          port: '', // Leave empty if no specific port is needed
          pathname: '/**', // Allows all paths under the domain
        },

        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '', // Leave empty if no specific port is needed
          pathname: '/**', // Allows all paths under the domain
        },
        {
          protocol: 'https',
          hostname: 'cdn-icons-png.freepik.com',
          port: '', // Leave empty if no specific port is needed
          pathname: '/**', // Allows all paths under the domain
        },
        {
          protocol: 'https',
          hostname: 'www.freepik.com',
          port: '', // Leave empty if no specific port is needed
          pathname: '/**', // Allows all paths under the domain
        },
        
      ],
    },
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
  };
  
  export default nextConfig;
  