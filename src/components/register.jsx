'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Register = () => {
  const router = useRouter();

  async function handleRegister(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await fetch('/api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    console.log(data);

    router.push('/auth/login');
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='bg-white p-8 shadow-md rounded max-w-md w-full' action={handleRegister}>
        <h1 className='text-2xl font-bold mb-4'>
          <Link href='/auth/login' className='text-blue-600'>
            Login
          </Link>{' '}
          | Register
        </h1>
        <input type='text' placeholder='Name' className='w-full p-2 border border-gray-300 rounded mt-2' name='name' />
        <input type='email' placeholder='Email' className='w-full p-2 border border-gray-300 rounded mt-2' name='email' />
        <input type='password' placeholder='Password' className='w-full p-2 border border-gray-300 rounded mt-2' name='password' />
        <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Register</button>
      </form>
    </div>
  );
};
