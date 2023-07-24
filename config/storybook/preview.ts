import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StoryDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { RouteDecorator } from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouteDecorator],
};
export default preview;
