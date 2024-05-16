import Image from 'next/image';
import { DeleteButton } from '@/components/DeleteButton';

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/user`, {
    cache: 'no-store',
  });
  const { _, data } = await res.json();
  console.log(data);

  return (
    <>
      <div className='my-8'>
        <div className='text-sm breadcrumbs ml-3 mb-3'>
          <ul>
            <li>
              <a href='/dashboard'>Dashboard</a>
            </li>
            <li>
              <a>User List</a>
            </li>
          </ul>
        </div>
        <div className='overflow-x-auto h-screen sticky'>
          <table className='table table-xs table-pin-rows table-pin-cols'>
            <thead>
              <tr>
                <th></th>
                <td>Image</td>
                <td>Name</td>
                <td>Email</td>
                <td>Role</td>
                <td>Action</td>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => {
                return (
                  <tr key={user.id}>
                    <td></td>
                    <td>
                      <div className='avatar'>
                        <div className='w-24 mask mask-squircle'>
                          <Image src='/images/photo.jpg' alt='' width={50} height={50} />
                        </div>
                      </div>
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <a className='btn btn-primary mx-2' href={`/dashboard/users/${user.id}`}>
                        Show
                      </a>
                      <a className='btn btn-accent mx-2' href={`/dashboard/profile/${user.id}`}>
                        Edit
                      </a>
                      {user.role === 'ADMIN' ? null : <DeleteButton id={user.id} />}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
