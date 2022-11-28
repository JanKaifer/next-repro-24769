/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,

  redirects: () => [
    {
      "source": "/database/:serie/tk-sm-r/:path*",
      "destination": "/database/:serie/SM-Kit-du-dresseur-\\(Raichu-d'Alola\\)/:path*", "permanent": true,
    }
  ]
}
