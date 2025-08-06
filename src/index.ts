import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const isNvmInstalled = (): boolean => {
  try {
    const nvmDir = process.env.NVM_DIR || `${process.env.HOME}/.nvm`;

    return existsSync(`${nvmDir}/nvm.sh`);
  } catch {
    return false;
  }
};

const runNvmCommand = (command: string): string => {
  try {
    return execSync(
      `bash -c 'source "${process.env.NVM_DIR || `${process.env.HOME}/.nvm`}/nvm.sh" && ${command}'`,
      { encoding: 'utf-8' }
    ).trim();
  } catch (error: any) {
    throw new Error(`❌ Failed to execute: ${command}\n${error.stderr || error.message}`);
  }
};

export const updateNodeLTS = async (): Promise<void> => {
  if (!isNvmInstalled()) {
    throw new Error(`NVM is not installed. Please install it first.`);
  }

  console.log('🔍 Checking for latest LTS version...');

  try {
    console.log('⏳ Installing latest LTS version...');

    runNvmCommand('nvm install --lts --latest-npm');

    const installedVersion = runNvmCommand('nvm ls --no-colors | grep -o "v[0-9]\\+\\.[0-9]\\+\\.[0-9]\\+" | tail -1');

    runNvmCommand(`nvm use ${installedVersion}`);
    runNvmCommand(`nvm alias default ${installedVersion}`);

    console.log(`✅ Node.js LTS updated to: ${installedVersion}`);
    console.log('💡 Default version set to latest LTS');
    console.log('\n🔄 Please restart your terminal for the changes to take full effect');
    console.log(`   or run: nvm use ${installedVersion}`);

  } catch (error: any) {
    console.error('❌ Error during update:');
    console.error(error.message);

    process.exit(1);
  }
};
