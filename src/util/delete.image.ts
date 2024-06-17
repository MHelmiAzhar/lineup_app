import * as fs from 'fs';
export async function deleteFile(filePath: string) {
  console.log(filePath);
  // Cek apakah file ada
  if (fs.existsSync(filePath)) {
    // Hapus file
    await fs.promises.unlink(filePath);
  }
}
