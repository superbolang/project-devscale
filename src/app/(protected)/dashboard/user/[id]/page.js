import Image from 'next/image';
import { DeleteButton } from '@/components/deleteButton';

export default async function Page({ params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/v1/user/${id}`, {
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
      </div>
      <div className='flex justify-end p-4'>
        <button className='bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'>Edit</button>
        <DeleteButton id={id} />
      </div>
    </div>
  );
}
