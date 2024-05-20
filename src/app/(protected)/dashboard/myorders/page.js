import Image from 'next/image';
import Link from 'next/link';
import ModalOrder from '@/components/ModalOrder';

export default async function Page() {
  return (
    <div className='my-8'>
      <div className='text-sm breadcrumbs ml-3 mb-3'>
        <ul>
          <li>
            <Link href={'/dashboard'}>Dashboard</Link>
          </li>
          <li>
            <Link href={''}>My Order</Link>
          </li>
        </ul>
      </div>

      <div>
        <label htmlFor='book-order' className='btn mb-3'>
          Add Order
        </label>
        <ModalOrder modalId={'book-order'} />
      </div>

      {/* <h1 className='ml-3 text-lg '>My Order</h1> */}
      <div className='card card-side bg-base-100 shadow-xl mt-3'>
        <figure>
          <Image src='/images/photo.jpg' alt='Movie' width={300} height={300} />
        </figure>
        <div className='card-body'>
          <ul>
            <li>Id : 1</li>
            <li>Pet Name : </li>
            <li>Pet Type : </li>
            <li>Package : </li>
            <li>Check In : </li>
            <li>Check Out : </li>
            <li>
              Status :<div className='badge badge-neutral ml-1'>Cancel</div>
              <div className='badge badge-primary ml-1'>On Going</div>
              <div className='badge badge-secondary ml-1'>On Procces</div>
              <div className='badge badge-accent ml-1'>Complete</div>
            </li>
            <li>
              Special Treatment : <textarea className='textarea textarea-bordered h-24 w-full' name='special_treatment' placeholder='Let us know'></textarea>
            </li>

            <li className='flex flex-row gap-2'>
              <label htmlFor='edit-user' className='btn btn-primary mx-1'>
                Edit
              </label>
              <ModalOrder modalId={'edit-order'} isEdit={true} />
              <Link href={''} className='btn btn-secondary'>
                Delete
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
