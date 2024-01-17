import { addons } from '@storybook/manager-api';
import wcTheme from "./sbTheme";
import './addons/ai/AI';
import './addons/github/Github';
import './addons/TitleEnhancer';

addons.setConfig({
  theme: wcTheme,
});

addons.setConfig({
  sidebar: {
    filters: {
      patterns: (item) => {
        return !(item.tags?.includes("_hidden_") && item.tags?.includes("story"))
      }
    }
  }
});