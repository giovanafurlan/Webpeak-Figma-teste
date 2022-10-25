import matter from "gray-matter";
import { fetchPostContent } from "../../lib/blogs";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from 'date-fns';
import PostLayout from "../../components/PostLayout";
import { GetStaticPaths, GetStaticProps } from "next";

export type Props = {
  image: string;
  title: string;
  intro: string;
  dateString: string;
  slug: string;
  tags: string[];
  categorias: string[];
  author: string;
  description?: string;
  markdown: string;
};

const slugToPostContent = (postContents => {
  let hash = {}
  postContents.forEach(it => hash[it.slug] = it)
  return hash;
})(fetchPostContent());

export default function Post({
  image,
  title,
  dateString,
  slug,
  tags,
  categorias,
  author,
  intro,
  markdown
}:Props) {

  return (
    <PostLayout
      title={title}
      image={image}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      categorias={categorias}
      intro={intro}>
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </PostLayout>
  )
}

export const getStaticPaths: GetStaticPaths  = async () => {
  const paths = fetchPostContent().map(it => "/blogs/" + it.slug);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params.post as string;
    const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
    const { content, data } = matter(source, {
      engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
    });

    const fileContent = matter(fs.readFileSync(`./content/blogs/${slug}.mdx`, 'utf8'));
    const markdown = fileContent.content;

    return {
      props: {
        image: data.image,
        title: data.title,
        dateString: data.date,
        slug: data.slug,
        intro: data.intro,
        tags: data.tags,
        categorias: data.categorias,
        author: data.author,
        markdown
      },
    }
  } catch (error) {
    console.error("Error", error);
  }
};