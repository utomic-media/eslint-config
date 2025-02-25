# @utomic-media/eslint-config

ESLint configurations for Utomic Media projects.

## Installation

```bash
pnpm i -D @utomic-media/eslint-config
```

## Usage

This package provides ESLint configurations for different project types. Choose the configuration that best suits your project.

### ESLint Flat Config

Create an `eslint.config.js` file in your project root:

```js
import utomicConfig from '@utomic-media/eslint-config';

export default [
  // Base config (JavaScript)
  ...utomicConfig.base,
  
  // Add your customizations here
];
```

### Available Configurations

This package provides three configurations:

#### Base (JavaScript)

```js
import baseConfig from '@utomic-media/eslint-config/base';

export default [
  ...baseConfig,
  // Your customizations
];
```

#### TypeScript

```js
import typescriptConfig from '@utomic-media/eslint-config/typescript';

export default [
  ...typescriptConfig,
  // Your customizations
];
```

#### Vue

```js
import vueConfig from '@utomic-media/eslint-config/vue';

export default [
  ...vueConfig,
  // Your customizations
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