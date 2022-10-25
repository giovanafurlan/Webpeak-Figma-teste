import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from 'date-fns';
import { GetStaticProps, GetStaticPaths } from "next";
import matter from "gray-matter";
import md from 'markdown-it';
import { fetchParceirosContent } from "../../lib/parceiros";
import ParceirosLayout from "../../components/ParceirosLayout";

export type Props = {
  image: string;
  title: string;
  intro: string;
  dateString: string;
  slug: string;
  markdown: string;
};

const slugToPostContent = (postContents => {
  let hash = {}
  postContents.forEach(it => hash[it.slug] = it)
  return hash;
})(fetchParceirosContent());

export default function Parceiro({
  image,
  title,
  dateString,
  slug,
  intro,
  markdown
}:Props) {

  return (
    <ParceirosLayout
      key={title}
      title={title}
      imagem={image}
      intro={intro}
      slug={slug}
      date={parseISO(dateString)}>
      <div dangerouslySetInnerHTML={{ __html: md().render(markdown) }} />
    </ParceirosLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchParceirosContent().map(it => "/parceiros/" + it.slug);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  try {
    const slug = await params.post as string;
    const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
    const { content, data } = matter(source, {
      engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
    });
    const fileContent = matter(fs.readFileSync(`./content/parceiros/${slug}.mdx`, 'utf8'));
    const markdown = fileContent.content;

    return {
      props: {
        image: data.image,
        title: data.title,
        dateString: data.date,
        slug: data.slug,
        intro: data.intro,
        markdown
      },
    }
  } catch (error) {
    console.error("Error", error);
  }
};