import { jsx as _jsx } from "react/jsx-runtime";
import { addons, types } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import { useArgs } from '@storybook/manager-api';
const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;
addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'My Addon',
        render: ({ active, key }) => {
            const [args, updateArgs, resetArgs] = useArgs();
            console.error(args);
            return (_jsx(AddonPanel, { active: !!active }, key));
        },
    });
});
//# sourceMappingURL=HTMLPanel.js.map