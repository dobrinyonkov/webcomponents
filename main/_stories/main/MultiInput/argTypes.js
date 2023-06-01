export default {
    "previewItem": {
        "control": {
            "type": false
        }
    },
    "type": {
        "control": "select",
        "options": [
            "Email",
            "Number",
            "Password",
            "Tel",
            "Text",
            "URL"
        ]
    },
    "valueState": {
        "control": "select",
        "options": [
            "Error",
            "Information",
            "None",
            "Success",
            "Warning"
        ]
    },
    "openPicker": {
        "description": "Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.",
        "table": {
            "category": "methods"
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.0.0-rc.9"
};
//# sourceMappingURL=argTypes.js.map