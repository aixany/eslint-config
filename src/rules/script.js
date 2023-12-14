export default [
  // General Rules
  {
    stylistic: true,
    formatters: {
      css: true,
      html: true,
    },
    rules: {
      'curly': ['error', 'all'], // 不省略大括号
      'style/function-call-spacing': ['error', 'never'],
      'node/prefer-global/process': 'off',
      'antfu/top-level-function': 'off',
      'no-console': ['error', {
        allow: ['warn', 'error'],
      }],
    },
  },
]
