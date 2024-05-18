import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function ModalUser({ isEdit, modalId, id }) {
  async function handleRegister(formData) {
    'use server';
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/register`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    console.log(data);

    redirect('/dashboard/users');
  }

  async function handleUpdate(formData) {
    'use server';
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/user/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    console.log(data);
    redirect('/dashboard/users');
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
              <input type='text' name='name' placeholder='Type here' className='input input-bordered w-full' required />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Email</span>
              </div>
              <input type='email' name='email' placeholder='Type here' className='input input-bordered w-full' required />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Password</span>
              </div>
              <input type='password' name='password' placeholder='Type here' className='input input-bordered w-full' required />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Upload Image</span>
              </div>
              {isEdit ? <Image className='mask mask-squircle' src='/images/photo.jpg' width={100} height={100} alt='' /> : undefined}
              <input type='file' name='file' className='file-input file-input-bordered w-full' />
            </label>
            <div className='modal-action'>
              <button className='btn btn-primary'>{isEdit ? 'Update User' : 'Add User'}</button>
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
