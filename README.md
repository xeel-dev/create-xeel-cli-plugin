# Xeel CLI / Create Xeel CLI Plugin

<div style="text-align: center;">
  <strong>
    <a href="https://xeel.dev">Xeel</a>
     | 
    <a href="https://docs.xeel.dev">Documentation</a>
  </strong>
</div>


A simple scaffolding tool to create plugins for the Xeel CLI. 
This tool generates a boilerplate project with all the necessary 
files and configurations to start building your own Xeel CLI plugin.

CLI plugins can add support for new ecosystems to Xeel.

## Features

- Preconfigured structure for Xeel CLI plugins.
- Includes example commands and configurations.
- Easily customizable to suit your needs.

## Usage

### Using pnpm (recommended)

1.	Run the scaffolding tool with the desired plugin name:
```bash
pnpm create xeel-cli-plugin my-plugin
```
2.	Navigate to your new plugin directory:
```bash
cd my-plugin
```
3. Install dependencies
```bash
pnpm install
```
4.	Start building your plugin by editing the example ecosystem support in `src/ecosystem.ts`



