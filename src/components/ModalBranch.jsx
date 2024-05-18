import Image from 'next/image';

export default function ModalBranch({ isEdit, modalId, branch, config }) {
  return (
    <div>
      <input type='checkbox' id={modalId} className='modal-toggle' />
      <div className='modal' role='dialog'>
        <div className='modal-box'>
          <form>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Branch Name</span>
              </div>
              <input type='text' name='branch_name' placeholder='Type here' className='input input-bordered w-full' />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Pick Branch</span>
              </div>
              <select defaultValue={'Pick One'} name='branch_city' className='select select-bordered'>
                <option disabled>Pick one</option>
                {config.cities.map(function (city, index) {
                  return (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  );
                })}
              </select>
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Address</span>
              </div>
              <input type='text' name='branch_address' placeholder='Type here' className='input input-bordered w-full' />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Upload Image</span>
              </div>
              {isEdit ? <Image className='mask mask-squircle' src='/images/photo.jpg' width={100} height={100} alt='' /> : undefined}
              <input type='file' name='branch_image' className='file-input file-input-bordered w-full' />
            </label>
            <div className='modal-action'>
              <button className='btn btn-primary'>{isEdit ? 'Update Branch' : 'Add Branch'}</button>
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
