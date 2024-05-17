import { BranchDetail } from '@/components/BranchDetail';
import Link from 'next/link';

export default function Page({ params }) {
  const data = {
    name: 'aaaaa',
  };

  return (
    <div className='m-8'>
      <div className='text-sm breadcrumbs ml-3 mb-3'>
        <ul>
          <li>
            <Link href='/#home'>Home</Link>
          </li>
          <li>
            <Link href='/branch'>Branch</Link>
          </li>
          <li>
            <Link href={''}>{data.name}</Link>
          </li>
        </ul>
      </div>
      <BranchDetail branch={data} />
    </div>
  );
}
