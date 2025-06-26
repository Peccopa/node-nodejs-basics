import { readFile } from 'fs/promises';

const filePath = 'src/fs/files/fileToRead.txt';

const read = async (filePath) => {
  try {
    const fileContent = await readFile(filePath, { encoding: 'utf-8' });
    console.log(fileContent);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read(filePath);
