'use client';
import { useRouter } from 'next/navigation';

export const DeleteButton = ({ id, type }) => {
  const router = useRouter();

  async function handleDelete() {
    if(type == 'user'){
      const res = await fetch(`/api/v1/user/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      console.log(data);

      await fetch(`/api/v1/files/${id}`, {
        method: 'DELETE',
      });
      router.push('/dashboard/users');

    } else if(type == 'branch'){
      await fetch(`/api/v1/branch/${id}`,{
        method: 'DELETE',
      });
      router.push('/dashboard/branch');
    }
    router.refresh();
  }

  return (
    <button className='btn btn-secondary mx-2' onClick={handleDelete}>
      Delete
    </button>
  );
};
