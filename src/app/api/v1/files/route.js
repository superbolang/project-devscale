import { prisma } from '@/utils/prisma';
import { uploadFile } from '@/lib/uploadFile';

// export async function GET() {
//   const allFiles = await prisma.file.findMany();

//   return Response.json({ data: allFiles });
// }

export async function GET(_, { params }) {
  const key = await prisma.file.findUnique({
    where: {
      id: params.id,
    },
  });
  return Response.json({ data: key });
}

export async function POST(req) {
  // memakai formData untuk menerima file, json hanya bisa menerima string dan number
  const formData = await req.formData();
  const file = formData.get('file');
  const id = formData.get('id');

  // Upload
  await uploadFile({ key: file.name, folder: id, body: file });

  // Insert to DB
  await prisma.file.create({
    data: {
      id,
      key: file.name,
    },
  });
  console.log(file);
  return Response.json({ message: 'File upload success!' });
}
