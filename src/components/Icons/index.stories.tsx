import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  ArrowUpDoubleIcon,
  ArticleIcon,
  BarChartIcon,
  BriefcaseIcon,
  ChatBubbleIcon,
  ClockIcon,
  CloseIcon,
  EyeIcon,
  HomeIcon,
  LogoIcon,
  MenuIcon,
  PenIcon,
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

export const ArrowUpDouble: Story = {
  render: () => <ArrowUpDoubleIcon />,
};

export const Article: Story = {
  render: () => <ArticleIcon />,
};

export const BarChart: Story = {
  render: () => <BarChartIcon />,
};

export const ChatBubble: Story = {
  render: () => <ChatBubbleIcon />,
};

export const Clock: Story = {
  render: () => <ClockIcon />,
};

export const Pen: Story = {
  render: () => <PenIcon />,
};

