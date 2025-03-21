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
  // Utomic-media eslint configs
  // @see https://github.com/utomic-media/eslint-config

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
  // @see https://github.com/utomic-media/eslint-config
 ...config.base

  // Add your customizations here

  // Last: eslint config
  eslintConfigPrettier,
];
```

## Git Hooks
We can run ESLint (an Prettier) as a pre-commit hook. This makes sure all commits are linted (and formatted) automatically.

**1. Install husky and lint-staged**
```shell
pnpm i -D husky lint-staged
```
**2. Create the lintstaged config file:** `lintstagedrc.json`
```json5
{
  "**/*": ["eslint --cache .", "prettier --check --cache ."]
}
```
**3. Create a husky config file:** `.husky/pre-commit`
``` shell
pnpm exec lint-staged
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
