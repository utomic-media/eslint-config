import type { ESLintConfig } from '../types';

const baseConfig: ESLintConfig = [
  {
    name: 'utomic-media/ignores',
    ignores: ['**/node_modules/', '**/dist/', '**/build/', '**/shims.d.ts', '**/logs/'],
  }
];

export default baseConfig;
