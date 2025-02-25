# @utomic-media/eslint-config

ESLint configurations for Utomic Media projects.

## Installation

```bash
pnpm i -D @utomic-media/eslint-config
```

## Usage

This package provides ESLint configurations for different project types. Choose the configuration that best suits your project.

### ESLint Flat Config

Create an `eslint.config.mjs` file in your project root:

```js
import { config, presets } from '@utomic-media/eslint-config';

export default [
  // Use basic configs
  // This is more granular and allows to compose each rule-set
  ...config.base, // Base-config (JavaScript)
  ...config.typescript,
  ...config.vue,

  // Or use presets
  // These are combined configs
  // ...presets.base,
  // ...presets.typescript,
  // ...presets.vue,

  // Add your customizations here
];
```



## Requirements

- ESLint 8.56.0+
- Node.js 18+
- TypeScript 5.0+ (for TypeScript configuration)

## Development

Inspect the ESLint configurations:

```bash
pnpm dev
```

This runs the ESLint config inspector to help visualize and debug the configuration.

## License

MIT