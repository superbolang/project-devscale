import Image from 'next/image';
import Link from 'next/link';
import ModalBranch from '@/components/ModalBranch';
import { DeleteButton } from '@/components/DeleteButton';

async function getBranch() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/branch`, {
    cache: 'no-store',
  });

  const { data } = await res.json();

  return data;
}

async function getUser() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/user`, {
    cache: 'no-store',
  });
  const { _, data } = await res.json();
  return data;
}

Page.getInitialProps = ({ query: { id } }) => {
  return { id };
};

export default async function Page({ searchParams }) {
  const userId = searchParams.id;
  const branches = await getBranch();


  };

  return (
    <div className='my-8'>
      <div className='text-sm breadcrumbs ml-3 mb-3'>
        <ul>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link href={''}>Branch List</Link>
          </li>
        </ul>
      </div>
      <div>
        <label htmlFor='add-branch' className='btn mb-3'>
          Add Branch
        </label>
        <ModalBranch modalId={'add-branch'} config={config} />
      </div>
      <div className='overflow-x-auto h-screen sticky'>
        <table className='table table-xs table-pin-rows table-pin-cols'>
          <thead>
            <tr>
              <th></th>
              <td>Branch Name</td>
              <td>City</td>
              <td>Address</td>
              <td>Type of pets</td>
              <td>Action</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {branches.map((branch) => {
              return (
                <tr key={branch.id}>
                  <th></th>
                  <td>{branch.branchName}</td>
                  <td>{branch.branchCity}</td>
                  <td>{branch.branchAddress}</td>
                  <td>{branch.pets}</td>
                  <td className='flex flex-row gap-2'>
                    <Link href={`/dashboard/branch/${userId}/${branch.id}`} className='btn btn-accent mx-1'>
                      Show

                    <DeleteButton id={branch.id} type={'branch'} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
