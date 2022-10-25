import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export type PostContent = {
  readonly image: string;
  readonly date: string;
  readonly title: string;
  readonly intro: string;
  readonly language: string;
  readonly slug: string;
  readonly tags?: string[];
  readonly categorias?: string[];
  readonly fullPath: string;
};

let postCache: PostContent[];

export function fetchPostContent(): PostContent[] {
  if (postCache) {
    return postCache;
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as {
        image: string;
        date: string;
        title: string;
        intro: string;
        language: string;
        tags: string[];
        categorias: string[]
        slug: string;
        fullPath: string,
      };
      matterData.fullPath = fullPath;

      const slug = fileName.replace(/\.mdx$/, "");

      if (matterData.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        );
      }

      return matterData;
    });
  postCache = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return postCache;
}

export function countPosts(
  tag?: string,
  categoria?: string
): number {
  return fetchPostContent()
    .filter((it) => !tag || (it.tags && it.tags.includes(tag))).length;
}

export function listPostContent(
  page: number,
  limit: number,
  tag?: string,
  categoria?: string
): PostContent[] {
  return fetchPostContent()
    .filter((it) => !tag || (it.tags && it.tags.includes(tag)))
    .filter((it) => !categoria || (it.categorias && it.categorias.includes(categoria)))
    .slice((page - 1) * limit, page * limit);
}
