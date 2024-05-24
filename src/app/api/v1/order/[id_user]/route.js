import { prisma } from '@/utils/prisma';
import { uploadFile } from '@/lib/uploadFile';
import { nanoid } from 'nanoid';

export async function GET(req, { params }) {
  const { id_user } = params;
  const order = await prisma.order.findMany({
    where: {
      user_id: id_user,
    },
  });

  return Response.json({ message: `Get order with ID User ${id_user} success`, data: order }, { status: 200 });
}

export async function POST(req, { params }) {
  const { id_user } = params;
  const formData = await req.formData();
  const image = formData.get('image');

  const reqBody = {
    branch_id: formData.get('branch_id'),
    user_id: id_user,
    image: image,
    pet_name: formData.get('pet_name'),
    pet_type: formData.get('pet_type'),
    package: formData.get('package'),
    start_date: formData.get('start_date'),
    end_date: formData.get('end_date'),
    special_treatment: formData.get('special_treatment'),
  };

  for (const fieldName in reqBody) {
    if (!reqBody[fieldName]) {
      return Response.json({ message: `${fieldName} is required` }, { status: 400 });
    }
  }

  const branch = await prisma.branch.findFirst({
    where: {
      id: reqBody.branch_id,
    },
  });
  if (!branch) return Response.json({ message: `Branch not found` }, { status: 400 });

  reqBody.image = await uploadFile({ key: image.name, folder: nanoid(), body: image });

  try {
    const newOrder = await prisma.order.create({
      data: reqBody,
    });

    return Response.json({ message: 'Order created successfully', data: newOrder }, { status: 201 });
  } catch (error) {
    return Response.json({ message: 'Database error', error: error.message }, { status: 500 });
  }
}
