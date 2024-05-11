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
    <tr>
      <td className='border px-4 py-2'>
        <Image src='' alt='Profile Image' className='rounded-full w-20 h-20 object-cover' />
      </td>
      <td className='border px-4 py-2'>{user.name}</td>
      <td className='border px-4 py-2'>{user.email}</td>
      <td className='border px-4 py-2'>{user.role}</td>
      <td className='border px-4 py-2'>
        <button className='bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2' onClick={handleView}>
          View
        </button>
        {user.role === 'USER' ? <DeleteButton id={user.id} /> : null}
      </td>
    </tr>
  );
};
