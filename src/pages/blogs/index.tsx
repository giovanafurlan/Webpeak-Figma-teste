import dynamic from 'next/dynamic'
const BasicMeta = dynamic(() => import("../../components/meta/BasicMeta"));
const TwitterCardMeta = dynamic(() => import("../../components/meta/TwitterCardMeta"));
const OpenGraphMeta = dynamic(() => import("../../components/meta/OpenGraphMeta"));
const PostList = dynamic(() => import("../../components/PostList"));
import config from "../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../lib/blogs";
import { listTags, TagContent } from "../../lib/tags";
import { CategoriaContent, listCategorias } from "../../lib/categorias";
import useTranslation from "next-translate/useTranslation";

type Props = {
  blogs: PostContent[];
  tags: TagContent[];
  categorias: CategoriaContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Posts({ blogs, tags, categorias, pagination }:Props) {
  const { t } = useTranslation("common");

  const url = "/blogs";
  const title = 'Blog'
  return (
    <>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList blogs={blogs} tags={tags} categorias={categorias} pagination={pagination} />
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const blogs = listPostContent(1, config.posts_per_page);
    const tags = listTags();
    const categorias = listCategorias();
    const pagination = {
      current: 1,
      pages: Math.ceil(countPosts() / config.posts_per_page),
    };

    return {
      props: {
        blogs,
        tags,
        categorias,
        pagination
      },
    };
  } catch (error) {
    console.error("Error", error);
  }
};
