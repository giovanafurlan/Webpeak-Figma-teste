import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta/TwitterCardMeta";
import CategoriaPostList from "../../../components/CategoriaPostList";
import config from "../../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../../lib/blogs";
import { getCategoria, listCategorias, CategoriaContent } from "../../../lib/categorias";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  blogs: PostContent[];
  categoria: CategoriaContent;
  page?: string;
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Categorias({ blogs, categoria, page, pagination }:Props) {
  
  const url = `/blogs/categorias/${categoria.name}` + (page ? `/${page}` : "");
  const title = categoria.name;

  return (
    <>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <CategoriaPostList blogs={blogs} categoria={categoria} pagination={pagination} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const queries = params.cate as string[];
    const [cate, page] = [queries[0], queries[1]];
    const blogs = listPostContent(
      page ? parseInt(page as string) : 1,
      config.posts_per_page,
      cate
    );
    const categoria = getCategoria(cate);
    const props: {
      blogs: PostContent[];
      categoria: CategoriaContent;
      page?: string;
    } = { blogs, categoria };
    if (page) {
      props.page = page;
    }
    return {
      props,
    }
  } catch (error) {
    console.error("Error", error);
  }
};

export const getStaticPaths:GetStaticPaths = async () => {
  try {
    const paths = listCategorias().flatMap((categoria) => {
      const pages = Math.ceil(countPosts(categoria.cate) / config.posts_per_page);
      return Array.from(Array(pages).keys()).map((page) =>
        page === 0
          ? {
            params: { cate: [categoria.cate] },
          }
          : {
            params: { cate: [categoria.cate, (page + 1).toString()] },
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
