import { skipToken, useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

import { ItemCard } from '../components/ItemCard';
import { getNewStories } from '../lib/getNewStories';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [page] = React.useState(1);

  const query = useQuery({
    queryKey: ['news', page],
    queryFn:
      page != null
        ? () => getNewStories({ page }).then((stories) => stories)
        : skipToken,
    retry: false,
  });

  return (
    <>
      <h1 className="text-xl font-semibold">New</h1>
      <p className="text-xs font-normal">
        Discover the latest submissions in the Hacker News community.
      </p>
      {query.data?.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
        />
      ))}
    </>
  );
}
