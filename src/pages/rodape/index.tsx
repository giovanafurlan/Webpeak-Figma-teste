import useTranslation from 'next-translate/useTranslation';
import { listTags } from "../../lib/tags";
import { listRecursosContent } from '../../lib/recursos';
import { listParceirosContent } from '../../lib/parceiros';
import config from "../../lib/config";
import { listPostContent } from "../../lib/blogs";
import dynamic from 'next/dynamic'
const Rodape = dynamic(() => import("../../components/Rodape"));
const RodapeLink = dynamic(() => import("../../components/RodapeLink"));
const TagLink = dynamic(() => import("../../components/TagLink"));

export default function Footer({
    blogs,
    tags,
    recursos,
    parceiros }) {

    const { t } = useTranslation("common");

    return (
        <></>
        // <Rodape
        //     recursosCompletos={recursos.map((it, i) => (
        //         <RodapeLink key={i} item={it} link='recursos' />
        //     ))}
        //     ultimasPostagens={blogs.slice(1).slice(-5).map((it, i) => (
        //         <RodapeLink key={i} item={it} link='blogs' />
        //     ))}
        //     principaisPlataformas={parceiros.map((it, i) => (
        //         <RodapeLink key={i} item={it} link='parceiros' />
        //     ))}
        //     conteudoCategoria={tags.map((it, i) => (
        //         <TagLink key={i} tag={it} />
        //     ))} />
    )
}

// export const getStaticProps = async () => {
//     try {
//         const blogs = listPostContent(1, config.posts_per_page);
//         const tags = listTags();
//         const recursos = listRecursosContent(1, config.posts_per_page);
//         const parceiros = listParceirosContent(1, config.posts_per_page);

//         return {
//             props: {
//                 blogs,
//                 tags,
//                 recursos,
//                 parceiros
//             },
//         }
//     } catch (error) {
//         console.error("Error", error);
//     }
// };
