import type { Meta, StoryObj } from '@storybook/react-vite';

import { ItemCard } from './index.tsx';

const meta = {
  title: 'ItemCard',
  component: ItemCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      id: 1,

      title: 'Sample Item Title',
      text: 'This is a sample item text.',
      url: 'https://example.com',

      by: 'author',
      type: 'story',
      time: 1633036800,

      parent: null,
      kids: [2, 3, 4],
      descendants: 3,

      poll: null,
      parts: null,

      score: 100,

      dead: false,
      deleted: false,
    },
  },
};
