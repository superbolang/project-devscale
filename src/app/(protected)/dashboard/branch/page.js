import Image from 'next/image';
import Link from 'next/link';
import ModalBranch from '@/components/ModalBranch';

export default function Page() {
  const branch = {};

  const serverRuntimeConfig = {
    cities: ['Jakarta', 'Surabaya'],
    serviceTypes: [
      {
        id: 1,
        title: 'Boarding Accommodations',
        description: 'Secure and comfortable boarding options for pets of all sizes. Whether it’s a spacious suite or a cozy den, your guests will feel right at home',
        image: '/Boarding-Accommodations.jpg',
      },
      {
        id: 2,
        title: 'Feeding and Hydration',
        description: 'Prioritize the dietary needs of each pet. Offer high-quality meals and ensure fresh water is always available',
        image: '/Feeding-and-Hydration.jpg',
      },
      {
        id: 3,
        title: 'Exercise and Playtime',
        description: 'Regular play sessions and outdoor activities keep pets active and happy. Consider playgroups, walks, and even agility courses',
        image: '/Exercise-and-Playtime.jpg',
      },
      {
        title: 'Grooming Services',
        description: 'Pamper pets with baths, brushing, nail trims, and fur styling. A well-groomed pet is a happy pet',
        image: '/Grooming-Services.jpg',
      },
    ],
    servicePackages: [
      {
        id: 1,
        name: 'Basic',
        price: 50000,
        includeService: ['Boarding Accommodations', 'Feeding and Hydration'],
        image: '/Package-1.jpg',
      },
      {
        id: 2,
        name: 'Extra',
        price: 750000,
        includeService: ['Boarding Accommodations', 'Feeding and Hydration', 'Exercise and Playtime'],
        image: '/Package-2.jpg',
      },
      {
        id: 3,
        name: 'Super',
        price: 150000,
        includeService: ['Boarding Accommodations', 'Feeding and Hydration', 'Exercise and Playtime', 'Grooming Services'],
        image: '/Package-3.jpg',
      },
    ],
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
                <Link href={'/dashboard/branch/id'} className='btn btn-accent mx-1'>
                  Show
                </Link>
                <label htmlFor='edit-branch' className='btn btn-primary mx-1'>
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
