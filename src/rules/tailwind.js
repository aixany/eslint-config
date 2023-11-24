import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

const tailwind = [
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
  }),
]

export default tailwind
