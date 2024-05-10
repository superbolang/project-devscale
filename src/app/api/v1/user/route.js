import { prisma } from '@/utils/prisma';

export async function GET() {
  const allUser = await prisma.user.findMany();

  return Response.json({ message: 'Get all user success', data: allUser }, { status: 200 });
}
