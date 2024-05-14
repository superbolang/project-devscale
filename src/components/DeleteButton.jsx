'use client';
import { useRouter } from 'next/navigation';

export const DeleteButton = ({ id }) => {
  const router = useRouter();

  async function handleDelete() {
    const res = await fetch(`/api/v1/user/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log(data);
    router.push('/dashboard/user');
    router.refresh();

  }

  return (
    <button className='bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={handleDelete}>
      Delete
    </button>
  );
};
