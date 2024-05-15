import { useRouter } from 'next/navigation';

export const EditModal = ({ id, isOpen, onClose }) => {
  const router = useRouter();

  async function handleUpdate(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await fetch(`/api/v1/user/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    console.log(data);
    onClose();

    router.push('/dashboard/user');
    router.refresh();

  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div className='bg-white p-8 rounded-lg w-96'>
        <h2 className='text-2xl font-bold mb-4'>Edit User</h2>
        <form action={handleUpdate}>
          <input type='text' placeholder='Name' className='w-full p-2 border border-gray-300 rounded mt-2' name='name' required />
          <input type='email' placeholder='Email' className='w-full p-2 border border-gray-300 rounded mt-2' name='email' required />
          <input type='password' placeholder='Password' className='w-full p-2 border border-gray-300 rounded mt-2' name='password' required />
          <button className='w-full bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Update</button>
        </form>
        <button onClick={onClose} className='mt-4 text-blue-500 cursor-pointer'>
          Close
        </button>
      </div>
    </div>
  );
};
