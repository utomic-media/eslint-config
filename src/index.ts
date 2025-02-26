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

export const all: ESLintConfig = Object.values(config).flat();

export const presets = {
  base: [
    ...baseConfig
  ],

  typescript: [
    ...baseConfig,
    ...typescriptConfig,
  ],

  vue: [
    ...baseConfig,
    ...typescriptConfig,
    ...vueConfig,
  ],
};

