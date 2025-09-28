import type z from 'zod';

import type { ItemSchema } from '../../lib/constants';
import { ArticleIcon } from '../Icons';
import { StatsBar, useStatsData } from '../StatsBar';
import classes from './styles.module.css';

export function ItemCard(props: { item: z.infer<typeof ItemSchema> }) {
  const statsData = useStatsData({
    item: props.item,
  });

  return (
    <article className={classes.card}>
      <div className={classes.icon}>
        {props.item.type === 'story' && <ArticleIcon />}
      </div>

      <section className={classes.content}>
        <section className={classes.header}>
          <h1 className="text-sm font-medium">{props.item.title}</h1>

          {props.item.url != null && (
            <p className="text-xs font-normal">({props.item.url})</p>
          )}
        </section>

        <footer>
          <StatsBar stats={statsData.stats} />
        </footer>
      </section>
    </article>
  );
}
