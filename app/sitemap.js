// TODO: update SITE_URL to the real domain once hosting/the domain is purchased.
const SITE_URL = "https://www.stillnessresetco.com.au";

export default function sitemap() {
  const routes = ["", "/corporate", "/private", "/about", "/events", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/events" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
