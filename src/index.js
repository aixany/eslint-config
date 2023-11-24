import antfu from '@antfu/eslint-config'
import base from './rules/base.js'
import nuxt from './rules/nuxt.js'
import vue from './rules/vue.js'
import markdown from './rules/markdown.js'
import tailwindcss from './rules/tailwindcss.js'

const woodawn = (...args) => {
  return antfu(
    {
      markdown: true,
    }, // This must be the first argument
    // From the second arguments they are ESLint Flat Configs
    // you can have multiple configs
    base,
    vue,
    nuxt,
    markdown,
    tailwindcss,
    ...args,
  )
}

export default woodawn
