import fs from 'fs';
import { join } from 'path';

import { serialize } from 'next-mdx-remote/serialize';

export async function getContent(filePath: string) {
  const fileContent = fs.readFileSync(join(process.cwd(), filePath), 'utf8');

  return await serialize(fileContent);
}
