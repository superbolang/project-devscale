import Image from 'next/image';

export default async function Page() {
  return (
    <div className='my-8'>
      <div className='text-sm breadcrumbs ml-3 mb-3'>
        <ul>
          <li>
            <a href='/dashboard'>Dashboard</a>
          </li>
          <li>
            <a>Branch List</a>
          </li>
        </ul>
      </div>
      <div className='overflow-x-auto h-screen sticky'>
        <table className='table table-xs table-pin-rows table-pin-cols'>
          <thead>
            <tr>
              <th></th>
              <td>Branch Name</td>
              <td>City</td>
              <td>Address</td>
              <td>Branch Image</td>
              <td>Action</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Quality Control Specialist</td>
              <td>
                <div className='avatar'>
                  <div className='w-24 mask mask-squircle'>
                    <Image src='/images/photo.jpg' alt='' width={50} height={50} />
                  </div>
                </div>
              </td>
              <td>
                <a className='btn btn-primary'>Show</a>
                <a className='btn btn-primary'>Edit</a>
                <a className='btn btn-secondary'>Delete</a>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td>Branch Name</td>
              <td>City</td>
              <td>Address</td>
              <td>Branch Image</td>
              <td>Action</td>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
