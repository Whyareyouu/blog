import type { Meta, StoryObj } from "@storybook/react";
import { PageLoader } from "./PageLoader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/PageLoader",
  component: PageLoader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageLoaderLight: Story = {};
export const PageLoaderDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
