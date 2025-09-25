import cn from 'classnames';
import type { MouseEventHandler } from 'react';

import {
  BriefcaseIcon,
  CloseIcon,
  EyeIcon,
  HomeIcon,
  LogoIcon,
  SpeakIcon,
} from '../Icons';
import classes from './styles.module.css';

// This is almost never going to change, so we can use a constant here
// eslint-disable-next-line react-refresh/only-export-components
export const NAVIGATION_LINK_LIST = [
  { id: 'new', href: '#home', Icon: HomeIcon, label: 'New' },
  { id: 'ask', href: '#ask', Icon: SpeakIcon, label: 'Ask' },
  { id: 'show', href: '#show', Icon: EyeIcon, label: 'Show' },
  { id: 'jobs', href: '#jobs', Icon: BriefcaseIcon, label: 'Jobs' },
] as const;

export type ActiveLink = (typeof NAVIGATION_LINK_LIST)[number]['id'];

export function Navigation(props: {
  open: boolean;
  active: ActiveLink;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <nav
      className={cn(
        classes.navigation,
        props.open && classes['navigation--open'],
      )}
    >
      <div className={classes.navigation_header}>
        <LogoIcon />
        <button
          type="button"
          aria-label="Close navigation menu"
          className={classes.navigation_close}
          onClick={props.onCloseClick}
        >
          <CloseIcon />
        </button>
      </div>

      <div className={classes.navigation_link_list}>
        {NAVIGATION_LINK_LIST.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={cn(
              classes.navigation_link,
              props.active === link.id && classes['navigation_link--active'],
            )}
          >
            <link.Icon /> {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
