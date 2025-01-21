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

  const luaSpecScript = luaEnv.parse(spec)
  const luaSpec = luaSpecScript.exec()

  if (!(luaSpec instanceof luainjs.Table)) {
    throw new Error('Spec must be a table')
  }

  return JSON.stringify(luaSpec.toObject())
}
