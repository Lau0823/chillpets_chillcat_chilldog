/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "placedog.net",
      "placekitten.com",
      "co.pinterest.com",
      "i.pinimg.com", // 👈 este es el importante para las imágenes directas de Pinterest
    ],
  },
};

module.exports = nextConfig;
