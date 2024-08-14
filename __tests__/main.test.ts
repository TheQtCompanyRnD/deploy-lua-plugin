/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * These should be run as if the action was called from a workflow.
 * Specifically, the inputs listed in `action.yml` should be set as environment
 * variables following the pattern `INPUT_<INPUT_NAME>`.
 */

import * as core from '@actions/core'
import * as main from '../src/main'
import path from 'path'
import fetchMock from 'jest-fetch-mock'

// Mock the action's main function
const runMock = jest.spyOn(main, 'run')

// Mock the GitHub Actions core library
let debugMock: jest.SpiedFunction<typeof core.debug>
let errorMock: jest.SpiedFunction<typeof core.error>
let getInputMock: jest.SpiedFunction<typeof core.getInput>
let setFailedMock: jest.SpiedFunction<typeof core.setFailed>
//let setOutputMock: jest.SpiedFunction<typeof core.setOutput>

fetchMock.enableMocks()

describe('action', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    fetchMock.resetMocks()

    debugMock = jest.spyOn(core, 'debug').mockImplementation()
    errorMock = jest.spyOn(core, 'error').mockImplementation()
    getInputMock = jest.spyOn(core, 'getInput').mockImplementation()
    setFailedMock = jest.spyOn(core, 'setFailed').mockImplementation()
    //setOutputMock = jest.spyOn(core, 'setOutput').mockImplementation()
  })

  it('sets the time output', async () => {
    // Set the action's inputs as return values from core.getInput()
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'test':
          return 'true'
        case 'spec':
          return path.join(__dirname, 'data', 'testspec.lua')
        default:
          return ''
      }
    })

    await main.run()
    expect(runMock).toHaveReturned()

    expect(errorMock).not.toHaveBeenCalled()
    expect(setFailedMock).not.toHaveBeenCalled()
  })
  it('fails if it tries to exit', async () => {
    // Set the action's inputs as return values from core.getInput()
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'test':
          return 'true'
        case 'spec':
          return path.join(__dirname, 'data', 'exit.lua')
        default:
          return ''
      }
    })

    await main.run()
    expect(runMock).toHaveReturned()

    expect(errorMock).not.toHaveBeenCalled()
    expect(setFailedMock).toHaveBeenNthCalledWith(1, 'osExit not allowed')
  })
  it('fails if it tries to load a file', async () => {
    // Set the action's inputs as return values from core.getInput()
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'test':
          return 'true'
        case 'spec':
          return path.join(__dirname, 'data', 'loadfile.lua')
        default:
          return ''
      }
    })

    await main.run()
    expect(runMock).toHaveReturned()

    expect(errorMock).not.toHaveBeenCalled()
    expect(setFailedMock).toHaveBeenNthCalledWith(1, 'loadFile not allowed')
  })
  it('can print to debug', async () => {
    // Set the action's inputs as return values from core.getInput()
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'test':
          return 'true'
        case 'spec':
          return path.join(__dirname, 'data', 'print.lua')
        default:
          return ''
      }
    })

    await main.run()
    expect(runMock).toHaveReturned()
    expect(debugMock).toHaveBeenNthCalledWith(1, 'Hello World!')

    expect(errorMock).not.toHaveBeenCalled()
    expect(setFailedMock).not.toHaveBeenCalled()
  })
  it('spec must be a table', async () => {
    // Set the action's inputs as return values from core.getInput()
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'test':
          return 'true'
        case 'spec':
          return path.join(__dirname, 'data', 'notable.lua')
        default:
          return ''
      }
    })

    await main.run()
    expect(runMock).toHaveReturned()

    expect(errorMock).not.toHaveBeenCalled()
    expect(setFailedMock).toHaveBeenNthCalledWith(1, 'Spec must be a table')
  })
  it('should fail if invalid response', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'test':
          return 'false'
        case 'spec':
          return path.join(__dirname, 'data', 'testspec.lua')
        case 'download-url':
          return 'https://example.com/test.zip'
        case 'api':
          return 'https://example.com/'
        case 'token':
          return 'token'
        default:
          return ''
      }
    })

    fetchMock.mockResponseOnce('Something went wrong', { status: 400 })
    await main.run()
    expect(setFailedMock).toHaveBeenCalledWith(
      'HTTP Error: Something went wrong'
    )
  })
  it('Should create a new plugin if not found', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'test':
          return 'false'
        case 'spec':
          return path.join(__dirname, 'data', 'testspec.lua')
        case 'download-url':
          return 'https://example.com/test.zip'
        case 'api':
          return 'https://example.com/'
        case 'token':
          return '__token__'
        default:
          return ''
      }
    })

    fetchMock.mockResponseOnce(JSON.stringify({ items: [] }), { status: 200 })
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 200 })
    await main.run()
    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      'https://example.com/api/v1/admin/extensions?search=ValeLS',
      expect.anything()
    )
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      'https://example.com/api/v1/admin/extensions',
      expect.objectContaining({
        body: expect.anything(),
        method: 'POST',
        headers: expect.objectContaining({
          Authorization: 'Bearer __token__',
          'Content-Type': 'application/json',
          accept: 'application/json'
        })
      })
    )
    expect(setFailedMock).not.toHaveBeenCalled()
  })
})
