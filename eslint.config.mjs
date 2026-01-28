import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default [
  // Global ignores
  {
    ignores: [".next/", "node_modules/", "public/"],
  },

  // Base ESLint recommended
  eslint.configs.recommended,

  // TypeScript
  ...tseslint.configs.recommended,

  // React and Next.js
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      // Disable prop-types since we use TypeScript
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Max 100 lines for TSX files (excluding shadcn UI and tiptap components)
  {
    files: ["**/*.tsx"],
    ignores: ["components/ui/**", "components/tiptap-*/**"],
    rules: {
      "max-lines": ["error", { max: 100, skipBlankLines: true, skipComments: true }],
    },
  },
];
