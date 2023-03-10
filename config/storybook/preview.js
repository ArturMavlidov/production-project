import { addDecorator } from "@storybook/react";
import {
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator,
} from "../../src/shared/config/storybook/decorators";
import { Theme } from "../../src/app/providers/ThemeProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(RouterDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
