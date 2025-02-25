import { config } from '@utomic-media/eslint-config';

// Here we're importing our own configuration
// This file is used for development and testing purposes
// with the config-inspector tool (pnpm dev:inspect)

export default [
  ...config.base,
  ...config.typescript,
  ...config.vue,
  {
    ignore: ["**/dist/"], // Only needed in this dev-project, as the config reads itself and doesn't excludes itself
  }
];