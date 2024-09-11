import SETTINGS from "@/settings";
import { StoryBlokUtils } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const Storyblok = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_KEY,
  use: [apiPlugin],
});

export default async function sitemap() {
  try {
    const pages = (await StoryBlokUtils.getStaticPaths()).filter(
      (path) => path?.slug?.[0] !== "config"
    );

    const sitemap = pages.map((page) => {
      const slug = page?.slug.filter((item) => item !== "");
      let finalSlug = slug?.length > 0 ? slug.join("/") : slug;

      const url = `${SETTINGS.SITE_URL}/${finalSlug ?? ""}`;
    });

    return {
      url: url,
      lastModified: new Date(),
      priority: 1,
    };
  } catch (error) {
    return [];
    console.error(error);
  }
}
