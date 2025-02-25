import baseConfig from './configs/base';
import typescriptConfig from './configs/typescript';
import vueConfig from './configs/vue';
import type { ESLintConfig } from './types';


const config: Record<string, ESLintConfig> = {
  base: baseConfig,
  typescript: typescriptConfig,
  vue: vueConfig,
};

export default config;
