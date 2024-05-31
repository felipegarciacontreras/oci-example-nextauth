/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
        //   {
        //     source: "/",
        //     destination: "/messages/inbox",
        //     permanent: true,
        //   },
          {
            source: '/callback',
            destination: '/api/auth/callback',
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
