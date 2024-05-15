import { AllUser } from '@/components/allUser';
import { AddRegisterModal } from '@/components/addRegisterModal';

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
              return <AllUser user={user} key={user.id} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
