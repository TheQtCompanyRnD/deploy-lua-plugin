import * as core from '@actions/core'
import { promises as fs } from 'fs'
import { jsonFromSpec } from './luaspec'
import { createOrUpdateExtension, PluginMetaData } from './extensionstore'
import { env } from 'process'

// Import fs

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const specPath: string = core.getInput('spec')
    const isTest: boolean =
      core.getInput('test', { required: false }) === 'true'
    const downloadUrl: string = core.getInput('download-url')
    const api: string = core.getInput('api')
    const token: string = core.getInput('token')
    const publish: boolean =
      core.getInput('publish', { required: false }) === 'true'

    const spec = await fs.readFile(specPath)
    const asJson = JSON.parse(jsonFromSpec(spec.toString()))

    core.debug(`Parsed spec: ${JSON.stringify(asJson)}`)

    if (isTest) {
      // console.log(asJson)
      // The following only works with secret keys etc.
      return
    }

    const metaData = asJson as unknown as PluginMetaData

    await createOrUpdateExtension(downloadUrl, metaData, api, token, publish)

    if (env.GITHUB_STEP_SUMMARY) {
      core.summary
        .addHeading('Extension created or updated')
        .addLink(
          'Check API',
          `${api}/api/v1/plugins/${metaData.VendorId}.${metaData.Id}/versions`
        )
        .write()
    } else {
      core.warning('No $GITHUB_STEP_SUMMARY found')
    }

    //core.setOutput('outputJson', asJson)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
