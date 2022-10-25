import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from 'date-fns';
import matter from "gray-matter";
import { fetchRecursosContent, listRecursosContent } from "../../lib/recursos";
import RecursosLayout from "../../components/RecursosLayout";
import config from "../../lib/config";
import md from 'markdown-it';
import { GetStaticPaths, GetStaticProps } from "next";

export type Props = {
  recurso: string;
  image: string;
  title: string;
  intro: string;
  dateString: string;
  slug: string;
  recursos: string[];
  markdown: string;
};

const slugToPostContent = (postContents => {
  let hash = {}
  postContents.forEach(it => hash[it.slug] = it)
  return hash;
})(fetchRecursosContent());

export default function RecursosPost({
  recurso,
  image,
  intro,
  title,
  dateString,
  slug,
  recursos,
  markdown
}:Props) {
  return (
    <RecursosLayout
      key={title}
      recurso={recurso}
      title={title}
      imagem={image}
      intro={intro}
      slug={slug}
      date={parseISO(dateString)}
      recursos={recursos} >
      <div dangerouslySetInnerHTML={{ __html: md().render(markdown) }} />
    </RecursosLayout>
  )
}

export const getStaticPaths:GetStaticPaths = async () => {
  const paths = fetchRecursosContent().map(it => "/recursos/" + it.slug);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const recursos = listRecursosContent(1, config.posts_per_page);

    const slug = await params.post as string;
    const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
    const { content, data } = matter(source, {
      engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
    });
    const fileContent = matter(fs.readFileSync(`./content/recursos/${slug}.mdx`, 'utf8'));
    const markdown = fileContent.content;

    return {
      props: {
        recursos,
        recurso: data,
        image: data.image,
        title: data.title,
        dateString: data.date,
        slug: data.slug,
        filtros: data.filtros,
        intro: data.intro,
        markdown
      },
    }
  } catch (error) {
    console.error("Error", error);
  }
};