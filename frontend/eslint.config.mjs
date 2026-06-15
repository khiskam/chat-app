import { defineConfig } from "eslint/config";
import rules from "eslint-rules";

export default [
  ...rules,
  ...defineConfig([
    {
      files: [ "src/shared/ui/**" ],
      rules: { "react-refresh/only-export-components": "off" },
    },
    {
      files: [ "**/messages-list.tsx" ],
      rules: { "react-hooks/incompatible-library": "off" },
    },
  ]),
];
