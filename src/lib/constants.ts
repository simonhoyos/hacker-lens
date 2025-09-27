import z from 'zod';

export const HACKER_NEWS_API_URL = 'https://hacker-news.firebaseio.com/v0';

export const PAGE_SIZE = 30;

export const ItemSchema = z.object({
  id: z.number(),

  title: z.string().nullish(),
  text: z.string().nullish(),
  url: z.string().nullish(),

  by: z.string().nullish(),
  type: z.enum(['job', 'story', 'comment', 'poll', 'pollopt']),
  time: z.number().nullish(),

  parent: z.number().nullish(),
  kids: z.array(z.number()).nullish(),
  descendants: z.number().nullish(),

  poll: z.number().nullish(),
  parts: z.array(z.number()).nullish(),

  score: z.number().nullish(),

  dead: z.boolean().nullish(),
  deleted: z.boolean().nullish(),
});
