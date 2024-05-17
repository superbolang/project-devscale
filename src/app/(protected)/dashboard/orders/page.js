import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  return (
    <div className='my-8'>
      <div className='text-sm breadcrumbs ml-3 mb-3'>
        <ul>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link href={''}>Order List</Link>
          </li>
        </ul>
      </div>
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
                    <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
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
              <td className='flex flex-row gap-2'>
                <Link href={''} className='btn btn-primary'>
                  Edit
                </Link>
                <Link href={''} className='btn btn-secondary'>
                  Delete
                </Link>
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
  );
}
