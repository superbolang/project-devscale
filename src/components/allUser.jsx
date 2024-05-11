'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DeleteButton } from '@/components/deleteButton';

export const AllUser = ({ user }) => {
  const router = useRouter();

  async function handleView() {
    router.push(`/dashboard/user/${user.id}`);
  }

  return (
    <div className='max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold'>{user.name}</h1>
      </div>
      <div>
        <Image src='' alt='Profile Image' className='rounded-full w-20 h-20 object-cover' />
      </div>
      <p className='text-gray-700 my-4'>{user.email}</p>
      <div>
        <button className='bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2' onClick={handleView}>
          View
        </button>
        <DeleteButton id={user.id}/>
      </div>
    </div>
  );
};
