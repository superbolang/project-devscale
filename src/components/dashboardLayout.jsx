import Link from 'next/link';
import { LogoutBtn } from './logoutButton';

export const DashboardLayout = ({ isAdmin, name }) => {
  return (
    <nav className='bg-gray-800 p-4'>
      <ul className='flex justify-between space-x-4'>
        <div className='flex justify-start space-x-4'>
          <li>
            <Link href='/dashboard/service' className='text-white hover:text-gray-300'>
              Service
            </Link>
          </li>
          <li>
            <Link href='/dashboard/history' className='text-white hover:text-gray-300'>
              History
            </Link>
          </li>
          <li>
            <Link href='/dashboard/profile' className='text-white hover:text-gray-300'>
              {name}
            </Link>
          </li>
        </div>
        <li>
          <Link href='/' className='text-white hover:text-gray-300'>
            <LogoutBtn /> {isAdmin ? 'Admin' : 'User'}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
