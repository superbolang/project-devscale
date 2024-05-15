'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import React from 'react';

export const LogoutBtn = () => {
  const router = useRouter();
  function handleLogout() {
    // delete cookie
    Cookies.remove('token');
    router.push('/');
  }
  return (
    <button onClick={handleLogout} className='w-fit'>
      Logout
    </button>
  );
};
