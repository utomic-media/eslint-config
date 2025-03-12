import baseConfig from './configs/base';
import typescriptConfig from './configs/typescript';
import vueConfig from './configs/vue';
import ignoresConfig from './configs/ignores';
import type { ESLintConfig } from './types';


export const config: Record<string, ESLintConfig> = {
  base: baseConfig,
  typescript: typescriptConfig,
  vue: vueConfig,
  ignores: ignoresConfig,
};


export const presets = {
  base: [
    ...baseConfig,
    ...ignoresConfig,
  ],

  typescript: [
    ...baseConfig,
    ...typescriptConfig,
    ...ignoresConfig,
  ],

  vue: [
    ...baseConfig,
    ...typescriptConfig,
    ...vueConfig,
    ...ignoresConfig,
  ],

  all: Object.values(config).flat(),
};

