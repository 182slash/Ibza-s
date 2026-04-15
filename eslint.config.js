import js            from "@eslint/js";
import reactPlugin   from "eslint-plugin-react";
import reactHooks    from "eslint-plugin-react-hooks";
import globals       from "globals";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react:       reactPlugin,
      "react-hooks": reactHooks,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Relax for this project
      "react/prop-types":         "off",  // not using PropTypes; TS can be added later
      "react/react-in-jsx-scope": "off",  // not needed with React 17+ JSX transform
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
