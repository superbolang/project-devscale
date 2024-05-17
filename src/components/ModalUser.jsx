'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ModalUser({ isEdit, modalId, id }) {
  const router = useRouter();

  async function handleRegister(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await fetch('/api/v1/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    console.log(data);

    router.push('/dashboard/users');
    router.refresh();
  }

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
    router.push('/dashboard/users');
    router.refresh();
  }

  return (
    <div>
      <input type='checkbox' id={modalId} className='modal-toggle' />
      <div className='modal' role='dialog'>
        <div className='modal-box'>
          <form action={isEdit ? handleUpdate : handleRegister}>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Name</span>
              </div>
              <input type='text' name='name' placeholder='Type here' className='input input-bordered w-full' />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Email</span>
              </div>
              <input type='email' name='email' placeholder='Type here' className='input input-bordered w-full' />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Password</span>
              </div>
              <input type='password' name='password' placeholder='Type here' className='input input-bordered w-full' />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Upload Image</span>
              </div>
              {isEdit ? <Image src={undefined} width={100} height={100} alt='' /> : undefined}
              <input type='file' name='file' className='file-input file-input-bordered w-full' />
            </label>
            <div className='modal-action'>
              <button className='btn btn-primary'>{isEdit ? 'Update' : 'Add User'}</button>
              <label htmlFor={modalId} className='btn'>
                Close
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
