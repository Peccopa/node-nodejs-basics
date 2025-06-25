import { cp } from 'fs/promises';

const pathes = {
  src: 'src/fs/files/',
  dest: 'src/fs/files-copy/',
};

const copy = async ({ src, dest }) => {
  try {
    await cp(src, dest, { recursive: true, force: false, errorOnExist: true });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy(pathes);
