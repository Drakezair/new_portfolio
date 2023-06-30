import { ReactElement } from 'react';
import Head from 'next/head';

import Nav from './Nav';
import useTranslation from '../libs/i18n/useTranslation';

type MainLayoutI = {
  children: ReactElement | ReactElement[];
  seo: {
    title: string;
    description: string;
    ogtitle?: string;
    ogtype?: string;
    ogurl?: string;
    ogimage?: string;
  };
};

export default function MainLayout({
  children,
  seo: { title, description, ogtitle, ogtype, ogurl, ogimage },
}: MainLayoutI) {
  const { trans, changeLng } = useTranslation();
  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='robots' content='index' />
        <meta property='og:title' content={ogtitle} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content={ogtype} />
        <meta property='og:url' content={ogurl} />
        <meta property='og:image' content={ogimage} />
        <meta name='robots' content='follow' />
      </Head>
      <Nav />
      <div className='bg-gray-800'>{children}</div>
      <div className='fixed bottom-0 right-0 p-4 text-white'>
        <button
          onClick={() => changeLng('en')}
          className={`${trans === 'en' ? 'font-bold' : 'font-light'} mr-1`}
        >
          en
        </button>
        /
        <button
          onClick={() => changeLng('es')}
          className={`${trans === 'es' ? 'font-bold' : 'font-light'} ml-1`}
        >
          es
        </button>
      </div>
    </main>
  );
}
