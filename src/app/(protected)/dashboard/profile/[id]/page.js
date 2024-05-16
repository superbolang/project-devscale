'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page({ params }) {
  const { id } = params;
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
    router.push('/dashboard/users');
    router.refresh();
  }
  return (
    <div>
      <div className='text-sm breadcrumbs ml-2'>
        <ul>
          <li>
            <a href='/dashboard'>Dashboard</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
        </ul>
      </div>
      <form className='card-body min-w-sm grid place-content-center' action={handleUpdate}>
        <div className='avatar'>
          <div className='w-24 rounded-full'>
            <Image src='/images/photo.jpg' alt='' width={50} height={50} />
          </div>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input type='text' name='name' placeholder='name' className='input input-bordered' required />
        </div>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input type='email' name='email' placeholder='email' className='input input-bordered' />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>New Password</span>
          </label>
          <input type='password' name='password' placeholder='password' className='input input-bordered' required />
        </div>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Pick your picture</span>
          </div>
          <input type='file' className='file-input file-input-bordered w-full max-w-xs' />
          <div className='label'></div>
        </label>
        <div className='form-control mt-6'>
          <button className='btn btn-primary'>Update</button>
        </div>
      </form>
    </div>
  );
}
