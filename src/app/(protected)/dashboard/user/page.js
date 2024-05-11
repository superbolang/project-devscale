import { AllUser } from '@/components/allUser';

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/user`, {
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
