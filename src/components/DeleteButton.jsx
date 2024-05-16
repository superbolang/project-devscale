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
    router.push('/dashboard/users');
    router.refresh();
  }

  return (
    <button className='btn btn-secondary mx-2' onClick={handleDelete}>
      Delete
    </button>
  );
};
