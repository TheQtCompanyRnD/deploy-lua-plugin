# Deploy Lua Plugin

[![GitHub Super-Linter](https://github.com/actions/typescript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/actions/typescript-action/actions/workflows/ci.yml/badge.svg)
[![Check dist/](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml/badge.svg)](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml)
[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)

An action to help you deploy your Qt Creator Lua extension to the Qt Creator
Extension Store.

## Getting started

Once you have prepare your Lua extension for deployment, you can use this action
to deploy it to the Qt Creator Extension Store.

You will need to have an [API token (TBA)](http://link-to-api-token-settings)
from the Qt Creator Extension Store.

```yaml
- name: Release on Extension Store
  uses: Maddimax/deploy-lua-plugin@v2.6
  with:
    token: ${{ secrets.EXTENSION_STORE_API_TOKEN }}
    spec: MyPlugin/myplugin.lua
    download-url: http://example.com/my-plugin.zip
```

You can use the "Qt Creator Lua Plugin" template in Qt Creator to get a full
example of a ci workflow file.
