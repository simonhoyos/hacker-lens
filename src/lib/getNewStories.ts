import { HACKER_NEWS_API_URL, PAGE_SIZE } from './constants.ts';
import { getItem } from './getItem.ts';

export async function getNewStories(args: { page: number }) {
  const response = await fetch(
    `${HACKER_NEWS_API_URL}/newstories.json?print=pretty`,
  ).catch((error) => {
    throw error;
  });

  const news = await response.json();

  if (response.status >= 400) {
    throw new Error(news.error);
  }

  const start = (args.page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const storyList = await Promise.all(
    news.slice(start, end).map((id: number) => getItem({ id })),
  );

  return storyList;
}
