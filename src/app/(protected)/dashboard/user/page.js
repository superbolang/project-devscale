import { AllUser } from '@/components/allUser';

export default async function Page() {
  const res = await fetch('http://localhost:3000/api/v1/user', {
    cache: 'no-store',
  });
  const { _, data } = await res.json();
  console.log(data);

  return (
    <div className='flex py-4'>
      {data.map((user) => {
        return <AllUser user={user} key={user.id} />;
      })}
    </div>
  );
}
