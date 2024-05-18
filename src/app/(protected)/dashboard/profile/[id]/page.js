import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/user`, {
    cache: 'no-store',
  });
  const { _, data } = await res.json();
  return data;
}

export default async function Page({ params }) {
  const users = await getData();
  const { id } = params;
  const user = users.filter((user) => user.id == id);

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
    redirect('/dashboard');
  }

  return (
    <div>
      <div className='text-sm breadcrumbs ml-2'>
        <ul>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link href={''}>Edit Profile</Link>
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
          <input type='text' name='name' placeholder={user[0].name} className='input input-bordered' required />
        </div>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input type='email' name='email' placeholder={user[0].email} className='input input-bordered' required />
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
