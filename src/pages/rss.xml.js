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

// export async function GET(context) {
//   const posts = await getCollection("posts");
//   const rfc6749 = await getCollection("rfc6749-lite");
//
//   const items = [...posts, ...rfc6749, ...oauth2].map((entry) => {
//     const basePath = entry.collection === "posts" ? "/posts" : "/rfc6749-lite";
//     return {
//       ...entry.data,
//       link: `${basePath}/${entry.slug}/`,
//     };
//   });
//
//   return rss({
//     title: SITE_TITLE,
//     description: SITE_DESCRIPTION,
//     site: context.site,
//     items,
//   });
// }

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("posts");
  const rfc6749 = await getCollection("rfc6749-lite");
  const oauth2 = await getCollection("oauth2-core"); // ← 누락된 부분 추가

  const basePathMap = {
    posts: "/posts",
    "rfc6749-lite": "/rfc6749-lite",
    "oauth2-core": "/oauth2-core",
  };

  const items = [...posts, ...rfc6749, ...oauth2].map((entry) => {
    const basePath = basePathMap[entry.collection] || "/";
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
