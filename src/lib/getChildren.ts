import { getItem } from './getItem.ts';

export async function getChildren(args: { idList: number[] }) {
  const children = await Promise.all(args.idList.map((id) => getItem({ id })));

  return children;
}
