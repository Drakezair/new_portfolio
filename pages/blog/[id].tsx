import { NotionRenderer } from 'react-notion-x';
import { GetServerSidePropsContext, PreviewData } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import { ParsedUrlQuery } from 'querystring';

import MainLayout from '@/modules/Common/Layout/MainLayout';
import { getPage } from '@/modules/Common/libs/notion/api';
import {
  DatabaseQuery,
  PageRetrieve,
} from '@/modules/Common/libs/notion/api.types';
import { Image } from '@/modules/Common/UI/Image';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false,
  }
);
const notion = new NotionAPI();

export async function getServerSideProps(
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  const { id } = context.query as { id: string };
  if (!id)
    return {
      redirect: {
        permanent: false,
        destination: '/blog',
      },
    };

  try {
    const recordMap = await notion.getPage(id);
    const details: PageRetrieve = await getPage(id);
    if (!details?.cover) {
      throw new Error('fail');
    }
    return {
      props: {
        details,
        recordMap,
      },
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/blog',
      },
    };
  }
}

export default function BlogDetail({
  recordMap,
  details,
}: {
  recordMap: ExtendedRecordMap;
  details: DatabaseQuery;
}) {
  const router = useRouter();
  const { id } = router.query;
  const Seo = {
    title: `${details?.properties.Name.title[0].plain_text}`,
    description: details?.properties.Description.rich_text[0].plain_text,
    ogtitle: `${details?.properties.Name.title[0].plain_text}`,
    ogurl: `https//luisandrade.me/blog/${id}`,
    ogimage:
      details?.cover?.type === 'file'
        ? details?.cover?.file?.url
        : details?.cover?.external?.url,
    ogtype: 'article',
  };

  return (
    <MainLayout seo={Seo}>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        disableHeader
        components={{
          nextImage: Image,
          nextLink: Link,
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
        }}
      />
    </MainLayout>
  );
}
