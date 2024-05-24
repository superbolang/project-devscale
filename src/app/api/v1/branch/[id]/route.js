// import { prisma } from '@/utils/prisma';
//
// export async function GET(_, { params }) {
//   const singleBranch = await prisma.branch.findUnique({
//     where: {
//       id: params.id,
//     },
//   });
//
//   return Response.json({ message: 'Get single branch success', data: singleBranch }, { status: 200 });
// }
//
// export async function DELETE(_, { params }) {
//   const deleteBranch = await prisma.branch.delete({
//     where: {
//       id: params.id,
//     },
//   });
//
//   return Response.json({ message: 'Delete branch success', data: deleteBranch }, { status: 200 });
// }
//
// export async function PATCH(request, { params }) {
//   const { branchName, branchCity, branchAddress, pets } = await request.json();
//
//   const editBranch = await prisma.branch.update({
//     where: { id: params.id },
//     data: { branchName: branchName, branchCity: branchCity, branchAddress: branchAddress, pets: pets },
//   });
//
//   return Response.json({ message: 'Update branch success', data: editBranch }, { status: 200 });
// }

import { prisma } from '@/utils/prisma';

export async function GET(req, { params }) {
  const { id } = params;

  const branch = await prisma.branch.findFirst({
    where: {
      id: id,
    }
  });

  return Response.json({ message: `Get branch with ID ${id} success`, data: branch }, { status: 200 });
}

export async function PATCH(req, { params }) {
  const { id } = params
  const { branchName, branchCity, branchAddress, pets } = await req.json();

  // const formData = await req.formData()
  //
  // const reqBody = {
  //   branchName: formData.get('name'),
  //   city: formData.get('city'),
  //   address: formData.get('address'),
  // }
  //
  // for (const fieldName in reqBody) {
  //   if (!reqBody[fieldName]) {
  //     return Response.json({message: `${fieldName} is required`}, {status: 400})
  //   }
  // }

  try {
    const updatedBranch = await prisma.branch.update({
    where: { id },
    data: { branchName: branchName, branchCity: branchCity, branchAddress: branchAddress, pets: pets },
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