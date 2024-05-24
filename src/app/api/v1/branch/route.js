import { prisma } from '@/utils/prisma';
import { uploadFile } from '@/lib/uploadFile';
import { nanoid } from 'nanoid';

export async function GET(req, { params }) {
  const branch = await prisma.branch.findMany();

  return Response.json({ message: `Get list branch success`, data: branch }, { status: 200 });
}

export async function POST(req, { params }) {
  const formData = await req.formData()
  const image = formData.get('image')

  const reqBody = {
    image: image,
    name: formData.get('name'),
    city: formData.get('city'),
    address: formData.get('address'),
  }

  for (const fieldName in reqBody) {
    if (!reqBody[fieldName]) {
      return Response.json({message: `${fieldName} is required`}, {status: 400})
    }
  }

  reqBody.image = await uploadFile({ key: image.name, folder: nanoid(), body: image });

  try {
    const newBranch = await prisma.branch.create({
      data: reqBody
    });

    return Response.json({ message: 'Branch created successfully', data: newBranch }, { status: 201 })
  } catch (error) {
    return Response.json({ message: 'Database error', error: error.message }, { status: 500 })
  }
}
