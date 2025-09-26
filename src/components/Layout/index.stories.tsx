import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { type ActiveLink, NAVIGATION_LINK_LIST } from '../Navigation/index.tsx';
import { Layout } from './index.tsx';

const meta = {
  title: 'Layout',
  component: Layout,
  argTypes: {
    activeTab: {
      control: { type: 'select' },
      options: NAVIGATION_LINK_LIST.map((link) => link.id),
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeTab: 'new',
    children: <div>Some content</div>,
  },
  render: (props: { activeTab: ActiveLink; children: React.ReactNode }) => (
    <Layout activeTab={props.activeTab}>{props.children}</Layout>
  ),
};
