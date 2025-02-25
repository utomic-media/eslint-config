import tseslint from 'typescript-eslint';
import type { ESLintConfig } from '../types';

const typescriptConfig: ESLintConfig = [
  ...tseslint.configs.recommended as any, // Config is typed as old config, but compatible with new FlatFile config
  {
    name: 'utomic-media/typescript',
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      // emulate the TypeScript style of exempting unused variables with an underscore
      // @see https://typescript-eslint.io/rules/no-unused-vars/
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
    ignores: ['**/shims.d.ts'],
  },
];

export default typescriptConfig;
