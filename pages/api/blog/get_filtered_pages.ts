// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { getFilteredPages } from '@/modules/Common/libs/notion/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getFilteredPages(req.body);
  res.status(200).json(data);
}
