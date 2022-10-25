import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const recursosDirectory = path.join(process.cwd(), "content/recursos");

export type RecursosContent = {
  readonly image: string;
  readonly date: string;
  readonly title: string;
  readonly intro: string;
  readonly slug: string;
  readonly language: string;
  readonly filtros?: string[];
  readonly fullPath: string;
};

let recursosCache: RecursosContent[];

export function fetchRecursosContent(): RecursosContent[] {
  if (recursosCache) {
    return recursosCache;
  }
  const fileNames = fs.readdirSync(recursosDirectory);
  const allRecursosData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(recursosDirectory, fileName);
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
        filtros: string[]
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
  recursosCache = allRecursosData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return recursosCache;
}

export function countRecursos(filtro?: string): number {
  return fetchRecursosContent().filter(
    (it) => !filtro || (it.filtros && it.filtros.includes(filtro))
  ).length;
}

export function listRecursosContent(
  page: number,
  limit: number,
  filtro?: string
): RecursosContent[] {
  return fetchRecursosContent()
    .filter((it) => !filtro || (it.filtros && it.filtros.includes(filtro)))
    .slice((page - 1) * limit, page * limit);
}
