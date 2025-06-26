import { rename as rnm, access } from 'fs';

const pathes = {
  oldPath: 'src/fs/files/wrongFilename.txt',
  newPath: 'src/fs/files/properFilename.md',
};

const rename = async ({ oldPath, newPath }) => {
  access(newPath, (error) => {
    if (error) {
      rnm(oldPath, newPath, (error) => {
        if (error) throw new Error('FS operation failed');
      });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await rename(pathes);
