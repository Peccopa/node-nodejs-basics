import { rm } from 'fs/promises';

const filePath = 'src/fs/files/fileToRemove.txt';

const remove = async (filePath) => {
  try {
    await rm(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove(filePath);
