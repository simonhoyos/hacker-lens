import type { Meta, StoryObj } from '@storybook/react-vite';
import type { MouseEventHandler } from 'react';
import { fn } from 'storybook/test';

import { type ActiveLink, NAVIGATION_LINK_LIST, Navigation } from './index.tsx';

const meta = {
  title: 'Navigation',
  component: Navigation,
  argTypes: {
    open: { control: 'boolean' },
    active: {
      control: { type: 'select' },
      options: NAVIGATION_LINK_LIST.map((link) => link.id),
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    active: 'new',
    onCloseClick: fn(),
  },
  render: (props: {
    open: boolean;
    active: ActiveLink;
    onCloseClick: MouseEventHandler<HTMLButtonElement>;
  }) => (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '400px',
      }}
    >
      <Navigation
        open={props.open}
        active={props.active}
        onCloseClick={props.onCloseClick}
      />
    </div>
  ),
};
