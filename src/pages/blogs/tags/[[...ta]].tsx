import { GetStaticPaths, GetStaticProps } from "next";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta/TwitterCardMeta";
import TagPostList from "../../../components/TagPostList";
import config from "../../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../../lib/blogs";
import { getTag, listTags, TagContent } from "../../../lib/tags";

type Props = {
  blogs: PostContent[];
  tag: TagContent;
  page?: string;
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Tags({ blogs, tag, page }:Props) {
  
  const url = `/blogs/tags/${tag.name}` + (page ? `/${page}` : "");
  const title = tag.name;

  return (
    <>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <TagPostList blogs={blogs} tag={tag} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const queries = params.ta as string[];
    const [ta, page] = [queries[0], queries[1]];
    const blogs = listPostContent(
      page ? parseInt(page as string) : 1,
      config.posts_per_page,
      ta
    );
    const tag = getTag(ta);
    const pagination = {
      current: page ? parseInt(page as string) : 1,
      pages: Math.ceil(countPosts(ta) / config.posts_per_page),
    };
    const props: {
      blogs: PostContent[];
      tag: TagContent;
      pagination: { current: number; pages: number };
      page?: string;
    } = { blogs, tag, pagination };
    if (page) {
      props.page = page;
    }
    return {
      props,
    };
  } catch (error) {
    console.error("Error", error);
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const paths = listTags().flatMap((tag) => {
      const pages = Math.ceil(countPosts(tag.ta) / config.posts_per_page);
      return Array.from(Array(pages).keys()).map((page) =>
        page === 0
          ? {
            params: { ta: [tag.ta] },
          }
          : {
            params: { ta: [tag.ta, (page + 1).toString()] },
          }
      );
    });
    return {
      paths: paths,
      fallback: false,
    }
  } catch (error) {
    console.error("Error", error);
  }
};
