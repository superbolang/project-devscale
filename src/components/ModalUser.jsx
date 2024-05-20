import Image from 'next/image';
import { redirect } from 'next/navigation';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/user`, {
    cache: 'no-store',
  });
  const { _, data } = await res.json();
  return data;
}

async function getImage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/files/`, {
    cache: 'no-store',
  });
  const { data } = await res.json();
  return data;
}

export default async function ModalUser({ isEdit, modalId, id }) {
  const data = await getData();
  const images = await getImage();

  console.log(isEdit);
  console.log(modalId);
  console.log(id);

  const user = data.filter((item) => item.id == id);
  const item = images.filter((item) => item.id == id);
  let src;
  const publicUrl = 'https://pub-b4d8bce428ce4efaaa2645805a673293.r2.dev/devscale/petapp';
  item.length === 0 ? (src = '/images/photo.jpg') : (src = `${publicUrl}/${item[0].id}/${item[0].key}`);

  // data.map((user) => {
  //   console.log(user);
  //   const item = images.filter((item) => item.id == user.id);
  //   console.log(item);
  //   return { user, data };
  // });

  // console.log(user);
  // console.log(item);

  async function handleRegister(formData) {
    'use server';
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/register`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });

    await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/upload`, {
      method: 'POST',
      body: formData,
    });

    redirect('/dashboard/users');
  }

  async function handleUpdate(formData) {
    'use server';
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/upload`, {
      method: 'POST',
      body: formData,
    });

    await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/user/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    redirect('/dashboard/users');
  }

  return (
    <div>
      <input type='checkbox' id={modalId} className='modal-toggle' />
      <div className='modal' role='dialog'>
        <div className='modal-box'>
          <form action={isEdit ? handleUpdate : handleRegister}>
            <input type='text' name='id' value={isEdit ? user[0].name : ''}></input>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Name</span>
              </div>
              <input type='text' name='name' placeholder={isEdit ? user[0].name : 'Type here'} className='input input-bordered w-full' required />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Email</span>
              </div>
              <input type='email' name='email' placeholder={isEdit ? user[0].email : 'Type here'} className='input input-bordered w-full' required />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Password</span>
              </div>
              <input type='password' name='password' placeholder='Type here' className='input input-bordered w-full' required />
            </label>
            {isEdit ? (
              <>
                <label className='form-control w-full'>
                  <div className='label'>
                    <span className='label-text'>Upload Image</span>
                  </div>
                  <Image className='mask mask-squircle' src={src} width={100} height={100} alt='' />
                  <input type='file' name='file' className='file-input file-input-bordered w-full' />
                </label>
              </>
            ) : (
              ''
            )}
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
