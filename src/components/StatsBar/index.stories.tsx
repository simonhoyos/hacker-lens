import type { Meta, StoryObj } from '@storybook/react-vite';

import { type Stats, StatsBar, useStatsData } from './index.tsx';

const meta = {
  title: 'StatsBar',
  component: StatsBar,
  argTypes: {
    stats: {
      score: { control: 'number' },
      by: { control: 'text' },
      time: { control: 'number' },
      descendants: { control: 'number' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatsBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: {
      score: 10,
      by: 'user123',
      time: 1633036800,
      descendants: 5,
    },
  },
  render: function Component(props: { stats: Stats }) {
    const statsData = useStatsData({
      item: props.stats,
    });

    return <StatsBar stats={statsData.stats} />;
  },
};
