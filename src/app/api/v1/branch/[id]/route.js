import { prisma } from '@/utils/prisma';
import { uploadFile } from '@/lib/uploadFile';
import { nanoid } from 'nanoid';

export async function GET(req, { params }) {
  const { id } = params;

  const branch = await prisma.branch.findFirst({
    where: {
      id: id,
    }
  });

  return Response.json({ message: `Get branch with ID ${id} success`, data: branch }, { status: 200 });
}

export async function PUT(req, { params }) {
  const { id } = params
  const formData = await req.formData()
  const image = formData.get('image')

  const reqBody = {
    name: formData.get('name'),
    city: formData.get('city'),
    address: formData.get('address'),
  }

  for (const fieldName in reqBody) {
    if (!reqBody[fieldName]) {
      return Response.json({message: `${fieldName} is required`}, {status: 400})
    }
  }

  if (image)
    reqBody.image = await uploadFile({ key: image.name, folder: nanoid(), body: image });

  try {
    const updatedBranch = await prisma.branch.update({
      where: { id },
      data: reqBody,
    });

    return Response.json({ message: 'Branch updated successfully', data: updatedBranch }, { status: 200 })
  } catch (error) {
    return Response.json({ message: 'Database error', error: error.message }, { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  const { id } = params

  try {
    await prisma.branch.delete({
      where: { id },
    });

    return Response.json({ message: 'Branch deleted successfully' }, { status: 200 })
  } catch (error) {
    return Response.json({ message: 'Database error', error: error.message }, { status: 500 })
  }
}
