import globals from 'globals';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pluginImport from 'eslint-plugin-import-x';
import type { ESLintConfig } from '../types';

const baseConfig: ESLintConfig = [
  {
    name: 'eslint/recommended',
    ...eslint.configs.recommended,
  },
  {
    name: 'utomic-media/base',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      import: pluginImport as any, // Plugin type isn't fully compatible with the new FlatConfig type, but plugin is!
    },
    rules: {
      // Require empty line between certain statements
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: [
            // 'block',
            // 'block-like',
            'cjs-export',
            'class',
            'export',
            'import',
            // 'multiline-block-like',
            'multiline-const',
            'multiline-expression',
            'multiline-let',
            'multiline-var',
          ],
          next: '*',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let'],
          next: ['block', 'block-like', 'cjs-export', 'class', 'export', 'import'],
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var'],
        },
        { blankLine: 'any', prev: ['export', 'import'], next: ['export', 'import'] },
      ],
      // Require empty line between class members
      '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-self-import': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object', 'type'],
        },
      ],
      'import/newline-after-import': ['error', { count: 1, considerComments: true }],
    },
    ignores: ['**/node_modules/', '**/dist/', '**/build/'],
  }
];

export default baseConfig;
