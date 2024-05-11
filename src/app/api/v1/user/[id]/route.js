import { prisma } from '@/utils/prisma';

export async function GET(_, { params }) {
  const singleUser = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  return Response.json({ message: 'Get single success', data: singleUser }, { status: 200 });
}

export async function PATCH() {
  const editUser = await prisma.user.update({});

  return Response.json({ message: 'Update success', data: editUser }, { status: 200 });
}

export async function DELETE(_, { params }) {
  const deleteUser = await prisma.user.delete({
    where: {
      id: params.id,
    },
  });

  return Response.json({ message: 'Delete success', data: deleteUser }, { status: 200 });
}
