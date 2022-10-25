import dynamic from 'next/dynamic'
const BasicMeta = dynamic(() => import("../../components/meta/BasicMeta"));
const TwitterCardMeta = dynamic(() => import("../../components/meta/TwitterCardMeta"));
const OpenGraphMeta = dynamic(() => import("../../components/meta/OpenGraphMeta"));
const ParceirosList = dynamic(() => import("../../components/ParceirosList"));
import config from "../../lib/config";
import { listParceirosContent, ParceirosContent } from "../../lib/parceiros";
import { listFiltros } from '../../lib/filtros';
import useTranslation from "next-translate/useTranslation";

type Props = {
  parceiros: ParceirosContent[];
};

export default function Parceiros({ parceiros }: Props) {
  const { t } = useTranslation("common");

  const url = "/parceiros";
  const title = 'Parceiros';

  return (
    <>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ParceirosList
        parceiros={parceiros} />
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const parceiros = listParceirosContent(1, config.posts_per_page);
    const filtros = listFiltros();

    return {
      props: {
        parceiros,
        filtros
      },
    }
  } catch (error) {
    console.error("Error", error);
  }
};
