import { HACKER_NEWS_API_URL, ItemSchema } from './constants.ts';

export async function getItem(args: { id: number }) {
  const response = await fetch(
    `${HACKER_NEWS_API_URL}/item/${args.id}.json?print=pretty`,
  ).catch((error) => {
    throw error;
  });

  const data = await response.json();

  if (response.status >= 400) {
    throw new Error(data.error);
  }

  return ItemSchema.parse(data);
}
