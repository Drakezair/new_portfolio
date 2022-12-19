import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextApiRequest, NextApiResponse } from 'next';

const listId = process.env.NEXT_PUBLIC_MAILCHIMP_NEWSLETTER_LIST as string;
const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
const server = process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email_address, status } = req.body;
  mailchimp.setConfig({
    apiKey,
    server,
  });

  try {
    await mailchimp.lists.addListMember(listId, {
      email_address,
      status,
    });
  } catch (err) {
    return res.status(400).send({ error: true });
  }

  return res.json({ success: true });
}
