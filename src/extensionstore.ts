import * as core from '@actions/core'

type Platform = 'Windows' | 'Linux' | 'macOS'
type Architecture = 'x86_64' | 'arm64'

export interface PluginMetaData {
  Id: string
  Name: string
  Version: string
  CompatVersion: string
  Vendor: string
  VendorId: string
  Copyright: string
  License: string
  Category: string
  Description: string
  Url: string
  Tags: string[]
}

interface PlatformDescriptor {
  name: Platform
  architecture: Architecture
}

interface PluginSource {
  url: string
  platform?: PlatformDescriptor
}

interface PluginRequest {
  id: string
  display_name: string
  tags?: string[]
  license: 'open-source' | 'commercial'
  status: 'published' | 'unpublished' | 'disabled'
  icon?: string
  small_icon?: string
  released_at?: string
  is_latest?: boolean
  plugin: {
    metadata: PluginMetaData
    sources: PluginSource[]
  }
}

function createPluginRequest(
  pluginMetaData: PluginMetaData,
  //pluginSets: PluginSet[],
  publish: boolean,
  downloadUrl: string
): PluginRequest {
  return {
    id: pluginMetaData.Id,
    display_name: pluginMetaData.Name,
    license: 'open-source',
    status: publish ? 'published' : 'unpublished',
    tags: pluginMetaData.Tags,
    plugin: {
      metadata: pluginMetaData,
      sources: [
        {
          url: downloadUrl
        }
      ]
    }
  }
}

async function request(
  type: 'PUT' | 'POST' | 'GET',
  url: string,
  token: string,
  data?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  core.debug(`Requesting ${url}, method: ${type}, data: ${data}`)
  const response = await fetch(url, {
    method: type,
    headers: {
      Authorization: `Bearer ${token}`,
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: data ? data : undefined
  })
  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(
      `HTTP Error: ${[response.status, response.statusText, errorText].filter(s => s).join(', ')}`
    )
  }
  return await response.json()
}

export async function createOrUpdateExtension(
  downloadUrl: string,
  pluginMetaData: PluginMetaData,
  apiUrl: string,
  apiToken: string,
  publish: boolean
): Promise<void> {
  core.debug(`Creating or updating extension ${pluginMetaData.Name}`)

  const pluginRequest = JSON.stringify(
    createPluginRequest(pluginMetaData, publish, downloadUrl)
  )

  await request(
    'POST',
    `${apiUrl}api/v1/management/plugins`,
    apiToken,
    pluginRequest
  )
}
