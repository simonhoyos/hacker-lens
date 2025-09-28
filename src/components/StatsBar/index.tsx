import cn from 'classnames';
import { formatDistanceToNow } from 'date-fns';
import React from 'react';

import {
  ArrowUpDoubleIcon,
  ChatBubbleIcon,
  ClockIcon,
  PenIcon,
} from '../Icons';
import classes from './styles.module.css';

type Stats = {
  score?: number | null;
  by?: string | null;
  time?: number | null;
  descendants?: number | null;
};

export function useStatsData(args: { item: Stats }) {
  const stats = React.useMemo(() => {
    return {
      score: args.item.score ?? 0,
      by: args.item.by,
      time: args.item.time,
      descendants: args.item.descendants ?? 0,
    };
  }, [args.item.by, args.item.descendants, args.item.score, args.item.time]);

  return {
    stats,
  };
}

export function StatsBar(props: {
  stats: ReturnType<typeof useStatsData>['stats'];
}) {
  return (
    <div className={cn('text-xs font-normal', classes.bar)}>
      {props.stats.score != null && (
        <div className={classes.stat}>
          <ArrowUpDoubleIcon />
          <p>{props.stats.score ?? 0}</p>
        </div>
      )}
      {props.stats.by != null && (
        <div className={classes.stat}>
          <PenIcon />
          <p>
            by <span className={classes.author}>{props.stats.by}</span>
          </p>
        </div>
      )}
      {props.stats.time != null && (
        <div className={classes.stat}>
          <ClockIcon />
          <p>{formatDistanceToNow(new Date(props.stats.time * 1000))} ago</p>
        </div>
      )}
      <div className={classes.stat}>
        <ChatBubbleIcon />
        <p>
          {props.stats.descendants ?? 0} comment
          {(props.stats.descendants ?? 0) === 1 ? '' : 's'}
        </p>
      </div>
    </div>
  );
}
