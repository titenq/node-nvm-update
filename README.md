# 🔄 node-nvm-update

[![License: MIT](https://img.shields.io/badge/License-GPL3.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)
![Linux Support](https://img.shields.io/badge/OS-Linux-blue)
![](https://img.shields.io/github/stars/titenq/node-nvm-update.svg) ![](https://img.shields.io/github/forks/titenq/node-nvm-update.svg) ![](https://img.shields.io/github/issues/titenq/node-nvm-update.svg) 

> CLI tool to automatically update Node.js to the latest LTS version using NVM (Node Version Manager)

## ✨ Features

- Automatically installs the latest Node.js LTS version
- Sets LTS version as the default
- Updates npm to the latest version
- Works seamlessly with NVM
- Provides clear activation instructions
- Designed specifically for Linux systems

## 📦 Installation

### Using npx (recommended):
```bash
npx node-nvm-update
```

## ❓ Prerequisites
- [NVM](https://github.com/nvm-sh/nvm) installed
- [Node.js](https://nodejs.org) >= 18.3.0
- Linux

## 🎛️ Command Options
```bash
npx node-nvm-update [options]

Options:
  -v, --version    Output the current version
  -h, --help       Display help message

Examples:
  # Show version
  npx node-nvm-update --version
  
  # Show help
  npx node-nvm-update --help
```

## 📤 Output Example
```bash
🔍 Checking for latest LTS version...
⏳ Installing latest LTS version...
Downloading https://nodejs.org/dist/v22.18.0/node-v22.18.0-linux-x64.tar.xz...
######################################################################## 100.0%
Computing checksum with sha256sum
Checksums matched!
✅ Node.js LTS updated to: v22.18.0
💡 Default version set to latest LTS

🔄 Please restart your terminal for the changes to take full effect
   or run: nvm use v22.18.0
```

## 📜 License
This project is licensed under the GPL3.0 License - see the [LICENSE](LICENSE.txt) file for details.
