import Image from 'next/image';

export default async function Page({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/user/${id}`, {
    cache: 'no-store',
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <div className='flex flex-col'>
      <div className='basis-1 card card-side bg-base-100 shadow-xl '>
        <figure>
          <Image src='/images/photo.jpg' alt='Movie' width={300} height={300} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{data.name}</h2>
          <p>{data.email}</p>
        </div>
      </div>

      {data.role === 'ADMIN' ? null : (
        <>
          <div className='divider basis-1'>Order</div>
          <div className='basis-1'>
            <div className='overflow-x-auto h-screen sticky'>
              <table className='table table-xs table-pin-rows table-pin-cols'>
                <thead>
                  <tr>
                    <th></th>
                    <td>Pet Type</td>
                    <td>Pet Image</td>
                    <td>Pet Name</td>
                    <td>Pet Owner</td>
                    <td>Package</td>
                    <td>Check In</td>
                    <td>Check Out</td>
                    <td>Special Treatment</td>
                    <td>Review</td>
                    <td>Status</td>
                    <td>Action</td>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Pet Type</td>
                    <td>
                      <div className='avatar'>
                        <div className='w-24 mask mask-squircle'>
                          <Image src='/images/photo.jpg' alt='' width={50} height={50} />
                        </div>
                      </div>
                    </td>
                    <td>Pet Name</td>
                    <td>Pet Owner</td>
                    <td>Package</td>
                    <td>Check In</td>
                    <td>Check Out</td>
                    <td>Special Treatment</td>
                    <td>Review</td>
                    <td>
                      <select className='select select-bordered w-full max-w-xs'>
                        <option disabled selected>
                          Order Status
                        </option>
                        <option>On Process</option>
                        <option>On Going</option>
                        <option>Complete</option>
                        <option>Cancel</option>
                      </select>
                    </td>
                    <td>
                      <a className='btn btn-primary'>Edit</a>
                      <a className='btn btn-secondary'>Delete</a>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <td>Pet Type</td>
                    <td>Pet Image</td>
                    <td>Pet Name</td>
                    <td>Pet Owner</td>
                    <td>Package</td>
                    <td>Check In</td>
                    <td>Check Out</td>
                    <td>Special Treatment</td>
                    <td>Review</td>
                    <td>Status</td>
                    <td>Action</td>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
