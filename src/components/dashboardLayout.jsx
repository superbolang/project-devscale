import Link from 'next/link';
import { LogoutBtn } from './logoutButton';

export const DashboardLayout = ({ isAdmin, name, children }) => {
  return (
    <>
      <nav className='bg-gray-800 p-4'>
        <h1 className='text-white text-2xl mb-2.5'>
          Welcome {name}, you are logged in as {isAdmin ? 'Admin' : 'User'}
        </h1>
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
                Profile
              </Link>
            </li>
            {isAdmin ? (
              <li>
                <Link href='/dashboard/user' className='text-white hover:text-gray-300'>
                  User
                </Link>
              </li>
            ) : null}
          </div>
          <li>
            <Link href='/' className='text-white hover:text-gray-300'>
              <LogoutBtn />
            </Link>
          </li>
        </ul>
      </nav>
      <main className='px-6'>{children}</main>
    </>
  );
};
