import { StoryblokCMS } from "../utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const StoryblokInit = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export default async function sitemap() {
  try {
    const pages = await StoryblokCMS.getStaticPaths();

    const sitemap = pages.map((page) => {
      const baseurl = process.env.NEXT_PUBLIC_SITE_URL;
      const currentUrl = `${baseurl}${page.slug}`;

      return {
        url: currentUrl,
        lastModified: new Date(),
        priority: 1,
      };
    });

    return sitemap;
  } catch (error) {
    console.error(error);
    return [];
  }
}
