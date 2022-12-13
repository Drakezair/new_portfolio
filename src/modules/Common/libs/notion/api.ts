import { BlogCardProps } from '@/modules/Common/UI/BlogCard';

import { DatabaseQuery, DatabaseRetrieve, PageRetrieve } from './api.types';

export const getFilteredPages = async (
  filters: object
): Promise<BlogCardProps[]> => {
  try {
    const req = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABATE}/query`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
          'Notion-version': '2022-02-22',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          filter: filters,
        }),
      }
    );
    const data = await req.json();
    return data?.results?.map((item: DatabaseQuery) => ({
      title: item.properties.Name.title[0].plain_text,
      image: item?.cover?.external.url,
      id: item.id,
      description: item?.properties.Description.rich_text[0].plain_text,
    }));
  } catch (err) {
    return [];
  }
};

export const getFilteredPagesFront = async (
  filters: object,
  signal?: AbortSignal
): Promise<BlogCardProps[]> => {
  try {
    const req = await fetch(`/api/blog/get_filtered_pages`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
        'Notion-version': '2022-02-22',
        'Content-Type': 'application/json',
      },
      signal,
      method: 'POST',
      body: JSON.stringify({
        ...filters,
      }),
    });
    const data = await req.json();
    return data;
  } catch (err) {
    return [];
  }
};

export async function getPropertiesDatabase() {
  const req = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABATE}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
        'Notion-version': '2022-02-22',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }
  );

  const data: DatabaseRetrieve = await req.json();
  return { tags: data?.properties?.Tags };
}

export async function getPage(id: string) {
  const req = await fetch(`https://api.notion.com/v1/pages/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
      'Notion-version': '2022-02-22',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });

  const data: PageRetrieve = await req.json();
  return data;
}
