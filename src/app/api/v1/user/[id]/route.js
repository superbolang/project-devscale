import { prisma } from '@/utils/prisma';
import bcrypt from 'bcrypt';

export async function GET(_, { params }) {
  const singleUser = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  return Response.json({ message: 'Get single success', data: singleUser }, { status: 200 });
}

export async function DELETE(_, { params }) {
  const deleteUser = await prisma.user.delete({
    where: {
      id: params.id,
    },
  });

  return Response.json({ message: 'Delete success', data: deleteUser }, { status: 200 });
}

export async function PATCH(request, { params }) {
  const { name, email, password, src } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const editUser = await prisma.user.update({
    where: { id: params.id },
    data: { name: name, email: email, password: hashedPassword, image: src },
  });

  return Response.json({ message: 'Update success', data: editUser }, { status: 200 });
}
