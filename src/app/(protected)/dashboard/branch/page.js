import Image from 'next/image';
import Link from 'next/link';
import { ModalBranch } from '@/components/ModalBranch';

export default async function Page() {
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
        <ModalBranch modalId={'add-branch'} config={serverRuntimeConfig} />
      </div>
      <div className='overflow-x-auto h-screen sticky'>
        <table className='table table-xs table-pin-rows table-pin-cols'>
          <thead>
            <tr>
              <th></th>
              <td>Branch Name</td>
              <td>City</td>
              <td>Address</td>
              <td>Branch Image</td>
              <td>Action</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Quality Control Specialist</td>
              <td>
                <div className='avatar'>
                  <div className='w-24 mask mask-squircle'>
                    <Image src='/images/photo.jpg' alt='' width={50} height={50} />
                  </div>
                </div>
              </td>
              <td className='flex flex-row gap-2'>
                <Link href={'/branch/branch-slug'} className='btn btn-primary'>
                  Show
                </Link>
                <label htmlFor='edit-branch' className='btn'>
                  Edit
                </label>
                <ModalBranch modalId={'edit-branch'} branch={branch} isEdit={true} config={serverRuntimeConfig} />
                <Link href={''} className='btn btn-secondary'>
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td>Branch Name</td>
              <td>City</td>
              <td>Address</td>
              <td>Branch Image</td>
              <td>Action</td>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
