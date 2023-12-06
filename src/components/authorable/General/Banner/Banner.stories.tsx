// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Banner, { bannerDataProps } from './Banner';
import defaultData, { PrimaryBannerData, SecondaryBannerData } from './Banner.mock-data';

const meta: Meta<typeof Banner> = {
  title: 'Authorable/General/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  render: (args) => {
    return <Banner {...(expandObj({ ...args }) as bannerDataProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
export const secondary: Story = {
  render: (args) => {
    return <Banner {...(expandObj({ ...args }) as bannerDataProps)} />;
  },
  args: {
    ...flattenObj(PrimaryBannerData),
  },
};
export const ternary: Story = {
  render: (args) => {
    return <Banner {...(expandObj({ ...args }) as bannerDataProps)} />;
  },
  args: {
    ...flattenObj(SecondaryBannerData),
  },
};
