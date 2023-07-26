import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalDefault: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,\n" +
      "nesciunt, voluptatem? Consequuntur eum iste laboriosam? Earum error\n" +
      "excepturi fuga nisi.",
  },
};
export const ModalDark: Story = {
  args: {
    isOpen: true,
    children:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,\n" +
            "nesciunt, voluptatem? Consequuntur eum iste laboriosam? Earum error\n" +
            "excepturi fuga nisi.",
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
