import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkSize, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLinkPrimaryLight: Story = {
  args: {
    children: "test text",
    to: "/test",
    theme: AppLinkTheme.PRIMARY,
  },
};
export const AppLinkSecondaryLight: Story = {
  args: {
    children: "test text",
    to: "/test",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const AppLinkPrimaryDark: Story = {
  args: {
    children: "test text",
    to: "/test",
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const AppLinkSecondaryDark: Story = {
  args: {
    children: "test text",
    to: "/test",
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const AppLinkSizeL: Story = {
  args: {
    children: "size l",
    to: "/test",
    size: AppLinkSize.L,
  },
};
export const AppLinkSizeXL: Story = {
  args: {
    children: "size xl",
    to: "/test",
    size: AppLinkSize.XL,
  },
};
