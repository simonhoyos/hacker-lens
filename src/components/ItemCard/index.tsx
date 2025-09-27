import cn from 'classnames';
import { formatDistanceToNow } from 'date-fns';
import type z from 'zod';

import type { ItemSchema } from '../../lib/constants';
import {
  ArrowUpDoubleIcon,
  ArticleIcon,
  ChatBubbleIcon,
  ClockIcon,
  PenIcon,
} from '../Icons';
import classes from './styles.module.css';

export function ItemCard(props: { item: z.infer<typeof ItemSchema> }) {
  return (
    <article className={classes.card}>
      <div className={classes.icon}>
        {props.item.type === 'story' && <ArticleIcon />}
      </div>

      <section className={classes.content}>
        <section className={classes.header}>
          <h1 className="text-sm font-medium">{props.item.title}</h1>
          <p className="text-xs font-normal">({props.item.url})</p>
        </section>

        <footer className={cn('text-xs font-normal', classes.footer)}>
          <div className={classes.stat}>
            <ArrowUpDoubleIcon />
            <p>{props.item.score ?? 0}</p>
          </div>
          <div className={classes.stat}>
            <PenIcon />
            <p>
              by <span className={classes.author}>{props.item.by}</span>
            </p>
          </div>
          <div className={classes.stat}>
            <ClockIcon />
            <p>{formatDistanceToNow(new Date(props.item.time * 1000))} ago</p>
          </div>
          <div className={classes.stat}>
            <ChatBubbleIcon />
            <p>
              {props.item.descendants ?? 0} comment
              {(props.item.descendants ?? 0) === 1 ? '' : 's'}
            </p>
          </div>
        </footer>
      </section>
    </article>
  );
}
