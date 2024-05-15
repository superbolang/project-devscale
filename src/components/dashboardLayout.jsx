import Link from 'next/link';
import { LogoutBtn } from './logoutButton';

export const DashboardLayout = ({ isAdmin, name, children }) => {
  return (
    <>
      <nav className='bg-gray-800 p-4'>
        <h1 className='text-white text-2xl mb-2.5'>
          <Link href='/dashboard' className=' hover:text-gray-300'>
            Welcome
          </Link>{' '}
          {name}, you are logged in as {isAdmin ? 'Admin' : 'User'}
        </h1>
        <ul className='flex justify-between space-x-4'>
          <div className='flex justify-start space-x-4'>
            <li>
              <Link href='/dashboard/service' className='text-white hover:text-gray-300'>
                Service
              </Link>
            </li>
            <li>
              <Link href='/dashboard/order' className='text-white hover:text-gray-300'>
                Order
              </Link>
            </li>
            <li>
              {!isAdmin ? (
                <Link href='/dashboard/profile' className='text-white hover:text-gray-300'>
                  Profile
                </Link>
              ) : null}
            </li>
            {isAdmin ? (
              <>
                <li>
                  <Link href='/dashboard/branch' className='text-white hover:text-gray-300'>
                    Branch
                  </Link>
                </li>
                <li>
                  <Link href='/dashboard/user' className='text-white hover:text-gray-300'>
                    User
                  </Link>
                </li>
              </>
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
