import antfu from '@antfu/eslint-config'
import base from './rules/base.js'
import nuxt from './rules/nuxt.js'
import tailwind from './rules/tailwind.js'

const woodawn = (...args) => {
  return antfu(
    {}, // This must be the first argument
    // From the second arguments they are ESLint Flat Configs
    // you can have multiple configs
    ...base,
    ...args,
  )
}

export {
  woodawn,
  nuxt,
  tailwind,
}
