import { prisma } from '@/utils/prisma';
export const dynamic = 'force-dynamic';
import { nanoid } from 'nanoid';

export async function GET() {
  const allBranch = await prisma.branch.findMany();

  return Response.json({ message: 'Get all branch success', data: allBranch }, { status: 200 });
}

export async function POST(req) {
  const { branchName, branchCity, branchAddress, pets } = await req.json();
  const id = nanoid();

  const createNewBranch = await prisma.branch.create({
    data: {
      id,
      branchName,
      branchCity,
      branchAddress,
      pets,
    },
  });

  return Response.json({ message: 'Create branch successfully', data: createNewBranch }, { status: 201 });
}
