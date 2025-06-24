import { writeFile } from 'fs/promises';

const file = {
  path: 'src/fs/files/',
  name: 'fresh.txt',
  content: 'I am fresh and young',
};

const create = async ({ path, name, content }) => {
  try {
    await writeFile(path.concat(name), content, {
      flag: 'wx',
    });
  } catch {
    throw Error('FS operation failed');
  }
};

await create(file);