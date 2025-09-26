import type { MouseEventHandler } from 'react';

import { LogoIcon, MenuIcon } from '../Icons';
import classes from './styles.module.css';

export function Header(props: {
  onMenuClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <header className={classes.bar}>
      <a
        href="/"
        aria-label="Go to homepage"
        className={classes.logo}
      >
        <LogoIcon aria-hidden="true" />
      </a>

      <button
        type="button"
        className={classes.menu}
        aria-label="Open navigation menu"
        onClick={props.onMenuClick}
      >
        <MenuIcon aria-hidden="true" />
      </button>
    </header>
  );
}
