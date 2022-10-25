import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const parceirosDirectory = path.join(process.cwd(), "content/parceiros");

export type ParceirosContent = {
  readonly image: string;
  readonly date: string;
  readonly title: string;
  readonly intro: string;
  readonly slug: string;
  readonly language: string;
  readonly fullPath: string;
};

let parceirosCache: ParceirosContent[];

export function fetchParceirosContent(): ParceirosContent[] {
  if (parceirosCache) {
    return parceirosCache;
  }
  const fileNames = fs.readdirSync(parceirosDirectory);
  const allParceirosData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(parceirosDirectory, fileName);
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
        slug: string;
        language: string;
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
  parceirosCache = allParceirosData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return parceirosCache;
}
export function listParceirosContent(
  page: number,
  limit: number,
): ParceirosContent[] {
  return fetchParceirosContent()
    .slice((page - 1) * limit, page * limit);
}
