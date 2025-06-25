import { rename as rnm } from 'fs/promises';

const pathes = {
  oldPath: 'src/fs/files/wrongFilename.txt',
  newPath: 'src/fs/files/properFilename.md',
};

const rename = async ({ oldPath, newPath }) => {
  try {
    rnm(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename(pathes);
