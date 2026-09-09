import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.2.15",
    "localhost",
    "127.0.0.1",
    "*.trycloudflare.com",
    "*.localtunnel.me",
    "*.ngrok-free.app",
    "*.pinggy.link",
    "*.lhr.life"
  ]
};

export default nextConfig;
