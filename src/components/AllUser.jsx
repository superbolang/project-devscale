'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DeleteButton } from '@/components/DeleteButton';
import { FormUpload } from '@/components/FormUpload';
import { ImgProfile } from '@/components/ImgProfile';

export const AllUser = ({ user }) => {
  const router = useRouter();

  function handleView() {
    router.push(`/dashboard/users/${user.id}`);
  }

  return (
    <tr>
      <td className='border px-4 py-2'>
        <ImgProfile id={user.id} />
        <FormUpload id={user.id} />
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
