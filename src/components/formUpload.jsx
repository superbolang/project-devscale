'use client';

import { useRouter } from 'next/navigation';

export const FormUpload = () => {
  const router = useRouter();
  async function handleUpload(formData) {
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
  }
  return (
    <div>
      <form action={handleUpload}>
        <input name='file' type='file' className='border p-2 rounded' />
        <input name='author' placeholder='Name' className='border p-2 rounded' />
        <button className='bg-indigo-500 p-2 rounded text-white'>Upload</button>
      </form>
    </div>
  );
};
