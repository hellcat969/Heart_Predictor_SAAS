const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const axios = require("axios"); // To fetch dynamic data

const HOSTNAME = "https://quackex.com"; // Replace with your actual domain

// Function to fetch dynamic pages (Replace with your API)
const getDynamicPages = async () => {
  try {
    // Example: Fetch blog posts from an external API (or use local data)
    const response = await axios.get("https://quackex.com/blog"); // Replace with your API endpoint
    return response.data.map((post) => ({
      url: `/blog/${post.slug}`,
      changefreq: "weekly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error fetching dynamic pages:", error);
    return [];
  }
};

// Generate the sitemap
const generateSitemap = async () => {
  const dynamicPages = await getDynamicPages();

  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "weekly", priority: 0.8 },
    { url: "/privacy", changefreq: "monthly", priority: 0.7 },
    { url: "/pr", changefreq: "monthly", priority: 0.5 },
    ...dynamicPages, // Add dynamic routes
  ];

  const stream = new SitemapStream({ hostname: HOSTNAME });

  streamToPromise(require("stream").Readable.from(links).pipe(stream)).then(
    (data) => {
      fs.writeFileSync("./public/sitemap.xml", data.toString());
      console.log("✅ Sitemap generated successfully!");
    }
  );
};

generateSitemap();
