import pluginVue from 'eslint-plugin-vue';

import type { ESLintConfig } from '../types';

const vueConfig: ESLintConfig = [
  ...pluginVue.configs['flat/essential'],
  {
    name: 'utomic-media/vue',
  }
];

export default vueConfig;
