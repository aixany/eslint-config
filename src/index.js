import antfu from '@antfu/eslint-config'
import base from './rules/base.js'
import style from './rules/style.js'
import script from './rules/script.js'
import vue from './rules/vue.js'
import nuxt from './rules/nuxt.js'

const woodawn = (options, ...eslintConfig) => {
  const rules = []

  // 是否是vue项目
  if (options.isVue ?? true) {
    rules.push(vue)
  }

  // 是否是 nuxt 项目
  if (options.isNuxt ?? true) {
    rules.push(nuxt)
  }

  return antfu(
    // @antfu/eslint-config options, must be the first argument
    {
      ...base,
      gitignore: false, // 忽略gitignore
    },
    // Additional flat configs start from here
    script,
    style,
    ...rules,
    ...eslintConfig,
  )
}

export default woodawn
