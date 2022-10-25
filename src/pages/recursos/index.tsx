import dynamic from 'next/dynamic'
const BasicMeta = dynamic(() => import("../../components/meta/BasicMeta"));
const TwitterCardMeta = dynamic(() => import("../../components/meta/TwitterCardMeta"));
const OpenGraphMeta = dynamic(() => import("../../components/meta/OpenGraphMeta"));
const RecursosList = dynamic(() => import("../../components/RecursosList"));
import config from "../../lib/config";
import { listRecursosContent, RecursosContent } from "../../lib/recursos";
import { FiltroContent, listFiltros } from '../../lib/filtros';
import useTranslation from "next-translate/useTranslation";
import { GetStaticProps } from 'next';

type Props = {
  recursos: RecursosContent[];
};

export default function Recursos({ recursos }: Props) {
  const { t } = useTranslation("common");

  const url = "/recursos";
  const title = 'Recursos';

  return (
    <>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <RecursosList recursos={recursos} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const recursos = listRecursosContent(1, config.posts_per_page);
    const filtros = listFiltros();

    return {
      props: {
        recursos,
        filtros
      },
    }
  } catch (error) {
    console.error("Error", error);
  }
};
