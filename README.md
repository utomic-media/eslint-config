# @utomic-media/eslint-config

ESLint configurations for Utomic Media projects.

## Installation

```bash
pnpm i -D eslint-config-utomic-media
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

### Prettier
In order to use this config in combination with prettier:

**1. Install eslint-config-prettier:**

```shell
pnpm i -D eslint-config-prettier
```

**2. Add it to your config:**
```js
import { config, presets } from '@utomic-media/eslint-config';

export default [
  // Utomic-media eslint configs
 ...config.base

  // Add your customizations here
  eslintConfigPrettier,
];
```



## Requirements

- ESLint 8.56.0+
- Node.js 18+
- TypeScript 5.0+ (for TypeScript configuration)

## Development

Start the dev build:
```bash
pnpm dev
```

Inspect the ESLint configurations:

```bash
pnpm dev:inspector
```

This runs the ESLint config inspector to help visualize and debug the configuration.

## License

MIT
