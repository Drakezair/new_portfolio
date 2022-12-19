const suscribeToNewsletter = (mail: string) =>
  fetch(`/api/mailchimp/add_member`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email_address: mail, status: 'subscribed' }),
  });

export { suscribeToNewsletter };
