import { ReactElement } from 'react';
import Head from 'next/head';

import Nav from './Nav';

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
    </main>
  );
}
