import { extname, join } from 'path';
import { FILE_UPLOAD_DIR } from '../common/constants/file';
import * as fs from 'fs';

export async function saveImageToLocal(buffer: Buffer, originalName: string) {
  const directoryPath = FILE_UPLOAD_DIR;
  const extension = extname(originalName); // Ekstensi asli file
  const filename = `${Date.now()}${extension}`;
  const filePath = join(directoryPath, filename);

  // Buat direktori jika belum ada
  if (!fs.existsSync(directoryPath)) {
    await fs.promises.mkdir(directoryPath, { recursive: true });
  }

  // Tulis buffer ke file secara asinkron
  await fs.promises.writeFile(filePath, buffer);

  console.log(`File saved to ${filePath}`);
  return filePath; // Mengembalikan jalur file yang disimpan
}
