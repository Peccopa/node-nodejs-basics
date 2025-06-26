import { readdir } from 'fs/promises';

const dirPath = 'src/fs/files';

const list = async (dirPath) => {
  try {
    const dir = await readdir(dirPath);
    console.dir(dir);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list(dirPath);
