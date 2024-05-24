import BranchDetail from '@/components/BranchDetail';
import Link from 'next/link';

export default async function Page({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/branch/${id}`, {
    cache: 'no-store',
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <div className='m-8'>
      <div className='text-sm breadcrumbs ml-3 mb-3'>
        <ul>
          <li>
            <Link href='/dashboard'>Home</Link>
          </li>
          <li>
            <Link href='/dashboard/branch'>Branch</Link>
          </li>
          <li>
            <Link href={''}>{data.branchName}</Link>
          </li>
        </ul>
      </div>
      <BranchDetail branch={data} />
    </div>
  );
}
