const { exec } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const archiver = require('archiver');

const buildZip = (fileName, cb) => {
  const output = fs.createWriteStream(`${fileName}.zip`);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', () => {
    console.log(`构建成功：${fileName}`);
    cb?.()
  })

  archive.pipe(output);
  archive.directory(path.join(__dirname, '../dist'), false);
  archive.finalize();
}

const pksh = (suffix, zipName, cb) => {
  exec(`/Users/chenkang/Library/pnpm/pnpm run build:${suffix}`, (error) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }

    buildZip(zipName, cb)
  });
}

pksh(
  'clean',
  'dist',
  () => pksh('crx', 'crx_dist', () => exec(`rm -rf ${path.join(__dirname, '../dist')}`))
)
