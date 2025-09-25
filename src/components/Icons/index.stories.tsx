import type { Meta, StoryObj } from '@storybook/react-vite';

import { LogoIcon, MenuIcon } from './index.tsx';

const meta: Meta = {
  title: 'Icons',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
  render: () => <LogoIcon />,
};

export const Menu: Story = {
  render: () => <MenuIcon />,
};
