import * as core from '@actions/core'
import { promises as fs } from 'fs'
import { jsonFromSpec } from './luaspec'
import { createOrUpdateExtension, PluginMetaData } from './extensionstore'

// Import fs

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const specPath: string = core.getInput('spec')
    const isTest: boolean = core.getInput('test') === 'true'
    const downloadUrl: string = core.getInput('download-url')
    const api: string = core.getInput('api')
    const token: string = core.getInput('token')

    const spec = await fs.readFile(specPath)
    const asJson = JSON.parse(jsonFromSpec(spec.toString()))

    core.debug(`Parsed spec: ${JSON.stringify(asJson)}`)

    if (isTest) {
      // console.log(asJson)
      // The following only works with secret keys etc.
      return
    }

    await createOrUpdateExtension(
      downloadUrl,
      asJson as unknown as PluginMetaData,
      { version: '14.0.0', compat_version: '14.0.0' },
      api,
      token
    )

    //core.setOutput('outputJson', asJson)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
