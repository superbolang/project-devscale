'use client';

import { LogoutButton } from '@/components/LogoutButton';
import Link from 'next/link';

export const Navbar = ({ children }) => {
  return (
    <div>
      <navbar>
        <div className='drawer'>
          <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content flex flex-col'>
            {/* Navbar */}
            <div className='w-full navbar bg-pink-100 text-indigo-600 fixed top-0 z-50'>
              <div className='flex-none lg:hidden'>
                <label htmlFor='my-drawer-3' aria-label='open sidebar' className='btn btn-square btn-ghost'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-6 h-6 stroke-current'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                  </svg>
                </label>
              </div>
              <div className='flex-1 px-2 mx-2 font-bold text-xl'>
                <a href='/#home'>Pet Care App</a>
              </div>
              <div className='flex-none hidden lg:block'>
                <ul className='menu menu-horizontal px-1'>
                  {/* Navbar menu content here */}

                  <li>
                    <a href='/#home'>Home</a>
                  </li>
                  <li>
                    <a href='/#service-type'>Service</a>
                  </li>
                  <li>
                    <a href='/branch'>Branch</a>
                  </li>
                  <li>
                    <a href='/#review'>Review</a>
                  </li>
                  <li>
                    <a href='/#contact'>Contact</a>
                  </li>
                  <li>
                    <a href='/#faq'>FAQ</a>
                  </li>
                  <li>
                    <details>
                      <summary>Dashboard</summary>
                      <ul className='p-2 bg-pink-100 rounded-t-none'>
                        <li>
                          <a href='/dashboard/my-orders'>My Orders</a>
                        </li>
                        <li>
                          <a href='/dashboard/branch'>Branch</a>
                        </li>
                        <li>
                          <a href='/dashboard/users'>Users</a>
                        </li>
                        <li>
                          <a href='/dashboard/order'>Orders</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary>Account</summary>
                      <ul className='p-2 bg-pink-100 rounded-t-none'>
                        <li>
                          <a href='/register'>Register</a>
                        </li>
                        <li>
                          <a href='/login'>Login</a>
                        </li>
                        <li>
                          <Link href='/'>
                            <LogoutButton />
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
            {/* Page content here */}
            <div className='mt-14'>{children}</div>
          </div>
        </div>
      </navbar>
    </div>
  );
};
