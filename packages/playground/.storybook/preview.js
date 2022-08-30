import {useOptions} from './useOptions';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Toggle theme',
    description: 'Global theme for components',
    defaultValue: false,
    toolbar: {
      icon: '',
      items: ['Quartz Light', 'Quartz Dark', "Quartz High Contrast Black",
      "Quartz High Contrast White", "Morning Horizon", "Evening Horizon", "Horizon High Contrast Black", "Horizon High Contrast White"],
      showName: true,
      dynamicTitle: true
    }
  },
  rtl: {
    name: 'Direction',
    description: 'Global rtl mode for components',
    defaultValue: false,
    toolbar: {
      icon: '',
      items: ['LTR', 'RTL'],
      showName: true,
      dynamicTitle: true
    }
  },
  density: {
    name: 'Content Density',
    description: 'Global content density mode for components',
    defaultValue: false,
    toolbar: {
      icon: '',
      items: ['Cozy', 'Compact'],
      showName: true,
      dynamicTitle: true
    }
  }
}

export const decorators = [useOptions];