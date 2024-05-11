import { useRouter } from 'next/navigation';

export const RegisterModal = ({ isOpen, onClose }) => {
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
    onClose();

    router.push('/dashboard/user');
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div className='bg-white p-8 rounded-lg w-96'>
        <h2 className='text-2xl font-bold mb-4'>Add User</h2>
        <form action={handleRegister}>
          <input type='text' placeholder='Name' className='w-full p-2 border border-gray-300 rounded mt-2' name='name' />
          <input type='email' placeholder='Email' className='w-full p-2 border border-gray-300 rounded mt-2' name='email' />
          <input type='password' placeholder='Password' className='w-full p-2 border border-gray-300 rounded mt-2' name='password' />
          <button className='w-full bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Register</button>
        </form>
        <button onClick={onClose} className='mt-4 text-blue-500 cursor-pointer'>
          Close
        </button>
      </div>
    </div>
  );
};
