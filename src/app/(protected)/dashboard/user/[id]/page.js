import Image from 'next/image';
import { DeleteButton } from '@/components/deleteButton';
import { AddEditModal } from '@/components/addEditModal';

export default async function Page({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/user/${id}`, {
    cache: 'no-store',
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <div className='max-w-sm mx-auto bg-white shadow rounded-lg overflow-hidden m-4'>
      <Image src={''} alt='Profile Picture' className='w-full h-48 object-cover object-center' />
      <div className='p-4'>
        <h2 className='text-xl font-semibold'>{data.name}</h2>
        <p className='text-gray-600 text-sm'>{data.email}</p>
        <p className='text-gray-600 text-sm'>{data.role}</p>
      </div>
      <div className='flex justify-end p-4'>
        <AddEditModal id={id} />
        {data.role === 'USER' ? <DeleteButton id={id} /> : null}
      </div>
    </div>
  );
}
