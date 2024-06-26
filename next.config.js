/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // ↓ここ
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  //next.js config
  reactStrictMode: true,
});
