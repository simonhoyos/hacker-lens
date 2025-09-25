import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  BriefcaseIcon,
  CloseIcon,
  EyeIcon,
  HomeIcon,
  LogoIcon,
  MenuIcon,
  SpeakIcon,
} from './index.tsx';

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

export const Speak: Story = {
  render: () => <SpeakIcon />,
};

export const Briefcase: Story = {
  render: () => <BriefcaseIcon />,
};

export const Eye: Story = {
  render: () => <EyeIcon />,
};

export const Home: Story = {
  render: () => <HomeIcon />,
};

export const Close: Story = {
  render: () => <CloseIcon />,
};
