import { uploadFile } from '@/lib/uploadFile';
import { prisma } from '@/utils/prisma';
import { nanoid } from 'nanoid';

export async function POST(req) {
  // memakai formData untuk menerima file, json hanya bisa menerima string dan number
  const formData = await req.formData();
  const file = formData.get('file');
  const author = formData.get('author');

  const id = nanoid();

  // Upload

  await uploadFile({ key: file.name, folder: id, body: file });

  // Insert to DB

  await prisma.file.create({
    data: {
      id,
      key: file.name,
      author,
    },
  });

  console.log(file);

  return Response.json({ message: 'Good!' });
}
