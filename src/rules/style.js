import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default [
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
  }),
  {
    'tailwindcss/no-custom-classname': 'off',
  },
]
