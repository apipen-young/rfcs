import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

// export async function GET(context) {
//   const posts = await getCollection("posts");
//   return rss({
//     title: SITE_TITLE,
//     description: SITE_DESCRIPTION,
//     site: context.site,
//     items: posts.map((post) => ({
//       ...post.data,
//       link: `/posts/${post.slug}/`,
//     })),
//   });
// }

export async function GET(context) {
  const posts = await getCollection("posts");
  const rfc6749 = await getCollection("rfc6749-lite");

  const items = [...posts, ...rfc6749].map((entry) => {
    const basePath = entry.collection === "posts" ? "/posts" : "/rfc6749-lite";
    return {
      ...entry.data,
      link: `${basePath}/${entry.slug}/`,
    };
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}
