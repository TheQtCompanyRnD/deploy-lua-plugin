import * as core from '@actions/core'
import * as luainjs from 'lua-in-js'

export function jsonFromSpec(spec: string): string {
  const luaEnv = luainjs.createEnv({
    LUA_PATH: '',
    fileExists: () => true,
    loadFile: () => {
      throw new Error('loadFile not allowed')
    },
    osExit: () => {
      throw new Error('osExit not allowed')
    },
    stdout: data => core.debug(data)
  })

  const escapedSpec = spec
    .split('')
    .map(c => {
      if (c.charCodeAt(0) < 127) return c
      const buf = Buffer.from(c)
      return Array.prototype.map
        .call(buf, ce => `\\x${ce.toString(16)}`)
        .join('')
    })
    .join('')

  const luaSpecScript = luaEnv.parse(escapedSpec.toString())
  const luaSpec = luaSpecScript.exec()

  if (!(luaSpec instanceof luainjs.Table)) {
    throw new Error('Spec must be a table')
  }

  console.log('XXXX:', JSON.stringify(luaSpec.toObject()))

  return JSON.stringify(luaSpec.toObject())
}
