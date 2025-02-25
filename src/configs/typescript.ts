import tseslint from 'typescript-eslint';
import baseConfig from './base';
import type { ESLintConfig } from '../types';

const typescriptConfig: ESLintConfig = [
  ...baseConfig,
  ...tseslint.configs.recommended as any, // Config type isn't fully compatible with the new FlatConfig type, but plugin is!
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: false,
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
    },
  },
  {
    ignores: ['**/shims.d.ts'],
  },
];

export default typescriptConfig;
