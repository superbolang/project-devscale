import { AllUser } from '@/components/AllUser';
import { AddRegisterModal } from '@/components/AddRegisterModal';

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/user`, {
    cache: 'no-store',
  });
  const { _, data } = await res.json();
  console.log(data);

  return (
    <>
      <AddRegisterModal />

      <div className='overflow-x-auto'>
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th className='border px-4 py-2'>Image</th>
              <th className='border px-4 py-2'>Name</th>
              <th className='border px-4 py-2'>Email</th>
              <th className='border px-4 py-2'>Role</th>
              <th className='border px-4 py-2'>Menu</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return <AllUser key={user.id} user={user} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
