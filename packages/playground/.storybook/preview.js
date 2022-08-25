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
    defaultValue: 'sap_horizon',
    toolbar: {
      icon: '',
      items: ['sap_fiori_3', 'sap_fiori_3_dark',"sap_fiori_3_hcb",
      "sap_fiori_3_hcw", "sap_horizon", "sap_horizon_dark", "sap_horizon_hcb", "sap_horizon_hcw"],
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
      items: ['ltr', 'rtl'],
      showName: true,
      dynamicTitle: true
    }
  },
  density: {
    name: 'Content Density',
    description: 'Global content density mode for components',
    defaultValue: "Cozy",
    toolbar: {
      icon: '',
      items: ['Cozy', 'Compact'],
      showName: true,
      dynamicTitle: true
    }
  }
}

export const decorators = [useOptions];