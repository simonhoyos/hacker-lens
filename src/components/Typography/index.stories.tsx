import type { Meta, StoryObj } from '@storybook/react-vite';
import cn from 'classnames';

const meta: Meta = {
  title: 'Typography',
  argTypes: {
    content: { control: 'text' },
    size: {
      control: 'select',
      options: [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
      ],
    },
    weight: {
      control: 'select',
      options: [
        'font-light',
        'font-normal',
        'font-medium',
        'font-bold',
        'font-extrabold',
      ],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'The quick brown fox jumps over the lazy dog',
    size: 'text-base',
    weight: 'font-normal',
  },
  render: (props) => (
    <p className={cn(props.size, props.weight)}>{props.content}</p>
  ),
};
