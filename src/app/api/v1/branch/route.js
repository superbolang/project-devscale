// import { prisma } from '@/utils/prisma';
// export const dynamic = 'force-dynamic';
// import { nanoid } from 'nanoid';
//
// export async function GET() {
//   const allBranch = await prisma.branch.findMany();
//
//   return Response.json({ message: 'Get all branch success', data: allBranch }, { status: 200 });
// }
//
// export async function POST(req) {
//   const { branchName, branchCity, branchAddress, pets } = await req.json();
//   const id = nanoid();
//
//   const createNewBranch = await prisma.branch.create({
//     data: {
//       id,
//       branchName,
//       branchCity,
//       branchAddress,
//       pets,
//     },
//   });
//
//   return Response.json({ message: 'Create branch successfully', data: createNewBranch }, { status: 201 });
// }


import { prisma } from '@/utils/prisma';
import { nanoid } from 'nanoid';

export async function GET(req, { params }) {
  const branch = await prisma.branch.findMany();

  return Response.json({ message: `Get list branch success`, data: branch }, { status: 200 });
}

export async function POST(req, { params }) {
  // const formData = await req.formData()

  // const reqBody = {
  //   image: image,
  //   name: formData.get('name'),
  //   city: formData.get('city'),
  //   address: formData.get('address'),
  // }
  //
  // for (const fieldName in reqBody) {
  //   if (!reqBody[fieldName]) {
  //     return Response.json({message: `${fieldName} is required`}, {status: 400})
  //   }
  // }

  const { branchName, branchCity, branchAddress, pets } = await req.json();
  const id = nanoid();


  try {
    const newBranch = await prisma.branch.create({
    data: {
      id,
      branchName,
      branchCity,
      branchAddress,
      pets,
    },
  });

    return Response.json({ message: 'Branch created successfully', data: newBranch }, { status: 201 })
  } catch (error) {
    return Response.json({ message: 'Database error', error: error.message }, { status: 500 })
  }
}