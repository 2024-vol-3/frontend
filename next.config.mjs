import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

export default withPWA({});
