import pluginVue from 'eslint-plugin-vue';
import typescriptConfig from './typescript';
import type { ESLintConfig } from '../types';

const vueConfig: ESLintConfig = [
  ...typescriptConfig,
  ...pluginVue.configs['flat/essential'],
];

export default vueConfig;
