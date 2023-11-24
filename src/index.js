import antfu from '@antfu/eslint-config'
import base from './rules/base.js'
import nuxt from './rules/nuxt.js'
import vue from './rules/vue.js'
import tailwindcss from './rules/tailwindcss.js'

const woodawn = (...args) => {
  return antfu(
    {}, // This must be the first argument
    // From the second arguments they are ESLint Flat Configs
    // you can have multiple configs
    base,
    tailwindcss,
    ...args,
  )
}

const woovue = (...args) => {
  return antfu(
    {}, // This must be the first argument
    // From the second arguments they are ESLint Flat Configs
    // you can have multiple configs
    base,
    vue,
    tailwindcss,
    ...args,
  )
}

const woonuxt = (...args) => {
  return antfu(
    {}, // This must be the first argument
    // From the second arguments they are ESLint Flat Configs
    // you can have multiple configs
    base,
    vue,
    nuxt,
    tailwindcss,
    ...args,
  )
}

export {
  woodawn, // 基本项目
  woovue, // vue 项目
  woonuxt, // nuxt 项目
}
