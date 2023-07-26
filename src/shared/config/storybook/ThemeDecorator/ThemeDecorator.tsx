import { Decorator } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export const ThemeDecorator =
  (theme: Theme): Decorator =>
    (StoryComponent) => {
      return (
        <ThemeProvider initialTheme={theme}>
          <div className={`${theme}`}>
            <StoryComponent />
          </div>
        </ThemeProvider>
      );
    };
