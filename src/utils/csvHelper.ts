import { appendFile, readFile } from 'fs/promises';
import { join } from 'path';

const CSV_FILE_PATH = join(process.cwd(), 'data', 'subscribers.csv');

export async function saveEmail(email: string): Promise<void> {
  try {
    await appendFile(CSV_FILE_PATH, `${email},${new Date().toISOString()}\n`);
  } catch (error) {
    console.error('Error saving email:', error);
    throw new Error('Failed to save email');
  }
}