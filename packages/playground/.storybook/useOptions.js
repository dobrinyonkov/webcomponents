import { useEffect, useGlobals } from '@storybook/addons';

export const useOptions = (StoryFn) => {
  const [{ theme, rtl, density }] = useGlobals();

  useEffect(() => {
    var Conf = window["sap-ui-webcomponents-bundle"].configuration;
    Conf.setTheme(theme);

    document.body.setAttribute("dir", rtl === "rtl"? "rtl": "ltr");

    document.body.classList.remove("sapUiSizeCozy");
    document.body.classList.remove("sapUiSizeCompact");
    document.body.classList.add("sapUiSize" + density);
  }, [theme, rtl, density]);

  return StoryFn();
};