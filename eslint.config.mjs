import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default [
  ...compat.extends('next'),
  {
    rules: {
      'react/jsx-no-target-blank': 0,
      'import/no-anonymous-default-export': 0,
    },
  },
]
