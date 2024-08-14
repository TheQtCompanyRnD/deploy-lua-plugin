import * as core from '@actions/core'

type Platform = 'Windows' | 'Linux' | 'macOS'
type Architecture = 'x86_64' | 'arm64'

export interface PluginMetaData {
  Name: string
  Version: string
  CompatVersion: string
  Vendor: string
  Copyright: string
  License: string
  Category: string
  Description: string
  Url: string
  Tags: string[]
}

interface PlatformDescriptor {
  name: Platform
  version: string
  architecture: Architecture
}

interface PluginInstance {
  url: string
  size: number
  meta_data: PluginMetaData
  dependencies: PluginInstance[]
}

interface PluginSet {
  status: 'published' | 'draft' | 'hidden'
  core_compat_version: string
  core_version: string
  host_os: Platform
  host_os_version: string
  host_os_architecture: Architecture
  plugins: PluginInstance[]
}

interface ExtensionData {
  name: string
  vendor?: string
  tags?: string[]
  compatibility: string
  platforms: string[]
  license: string
  copyright?: string
  version: string
  version_history?: {
    version: string
    released_at: string
    is_latest: boolean
  }[]
  status: 'published' | 'draft' | 'hidden'
  is_pack: boolean
  icon?: string
  small_icon?: string
  description_paragraphs?: {
    header: string
    text: string[]
  }[]
  description_links?: {
    link_text: string
    url: string
  }[]
  description_images?: {
    image_label: string
    url: string
  }[]
  download_history?: {
    download_count: number
    first_download_at?: string
    latest_download_at?: string
  }[]
  plugin_sets: PluginSet[]
}
/*
interface Extension extends ExtensionData {
  extension_id: string
}
*/
type ExtensionSaveRequest = ExtensionData

interface Versions {
  version: string
  compat_version: string
}

function createPluginSets(
  downloadUrl: string,
  pluginMetaData: PluginMetaData,
  qtcVersion: Versions,
  publish: boolean
): PluginSet[] {
  const osArr = [
    {
      name: 'Windows',
      version: '10.0.0'
    },
    {
      name: 'Linux',
      version: '20.4.0'
    },
    {
      name: 'macOS',
      version: '11.0.0'
    }
  ]
  const allPlatforms: PlatformDescriptor[] = osArr
    .map(os => {
      return { ...os, architecture: 'x86_64' } as PlatformDescriptor
    })
    .concat(
      osArr.map(os => {
        return { ...os, architecture: 'arm64' } as PlatformDescriptor
      })
    )
  return allPlatforms.map(platform => {
    return {
      status: publish ? 'published' : 'draft',
      core_version: qtcVersion.version,
      core_compat_version: qtcVersion.compat_version,
      host_os: platform.name,
      host_os_version: platform.version, // TODO: pass the real data
      host_os_architecture: platform.architecture, // TODO: pass the real data
      plugins: [
        {
          url: downloadUrl,
          size: 5000, // TODO: check if it is needed, pass the real data
          meta_data: pluginMetaData,
          dependencies: []
        }
      ]
    }
  })
}

function createSaveRequest(
  pluginMetaData: PluginMetaData,
  pluginSets: PluginSet[],
  publish: boolean
): ExtensionSaveRequest {
  return {
    name: pluginMetaData.Name,
    vendor: pluginMetaData.Vendor,
    compatibility: 'Qt 6.0',
    platforms: ['Windows', 'macOS', 'Linux'],
    license: 'os',
    version: pluginMetaData.Version,
    status: publish ? 'published' : 'draft',
    is_pack: false,
    tags: pluginMetaData.Tags,
    plugin_sets: pluginSets
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
  qtcVersion: Versions,
  apiUrl: string,
  apiToken: string,
  publish: boolean
): Promise<void> {
  core.debug(`Creating or updating extension ${pluginMetaData.Name}`)
  const search = await request(
    'GET',
    `${apiUrl}api/v1/admin/extensions?search=${pluginMetaData.Name}`,
    apiToken
  )

  if (!search.items || !Array.isArray(search.items)) {
    throw new Error('Invalid response from the API')
  }

  const saveRequest = JSON.stringify(
    createSaveRequest(
      pluginMetaData,
      createPluginSets(downloadUrl, pluginMetaData, qtcVersion, publish),
      publish
    )
  )

  const extensionId =
    search.items.length > 0 && search.items[0].extension_id !== ''
      ? search.items[0].extension_id
      : ''
  if (extensionId) {
    await request(
      'PUT',
      `${apiUrl}api/v1/admin/extensions/${extensionId}`,
      apiToken,
      saveRequest
    )
  } else {
    await request(
      'POST',
      `${apiUrl}api/v1/admin/extensions`,
      apiToken,
      saveRequest
    )
  }
}
