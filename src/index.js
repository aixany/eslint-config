import antfu from '@antfu/eslint-config'
import style from './rules/style.js'
import script from './rules/script.js'
import vue from './rules/vue.js'
import nuxt from './rules/nuxt.js'

const woodawn = (options, ...eslintConfig) => {
  const rules = []

  // 是否是vue项目
  if (options.vue ?? true) {
    rules.push(vue)
  }

  // 是否是 nuxt 项目
  if (options.nuxt ?? true) {
    rules.push(nuxt)
  }

  return antfu(
    {
      gitignore: false, // 忽略gitignore
    }, // This must be the first argument
    // From the second arguments they are ESLint Flat Configs
    // you can have multiple configs
    style,
    script,
    ...rules,
    ...eslintConfig,
  )
}

export default woodawn
