import React from 'react';

import { Header } from '../Header';
import { type ActiveLink, Navigation } from '../Navigation';
import classes from './styles.module.css';

export function Layout(props: {
  activeTab: ActiveLink;
  children: React.ReactNode;
}) {
  const [navigationOpen, setNavigationOpen] = React.useState(false);

  return (
    <div className={classes.container}>
      <Header onMenuClick={() => setNavigationOpen(true)} />
      <Navigation
        open={navigationOpen}
        activeTab={props.activeTab}
        onCloseClick={() => setNavigationOpen(false)}
      />
      <main className={classes.content}>{props.children}</main>
    </div>
  );
}
