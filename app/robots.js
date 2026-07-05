// TODO: update SITE_URL to the real domain once hosting/the domain is purchased.
const SITE_URL = "https://www.stillnessresetco.com.au";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
