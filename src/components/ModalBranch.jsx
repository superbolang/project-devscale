'use client'

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function ModalBranch({ isEdit, modalId, branch, config }) {
  const router = useRouter()
  const labelModal = useRef()

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + (isEdit ? `/api/v1/branch/${branch.id}` : '/api/v1/branch')

  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    await fetch(url, {
        method: isEdit ? 'PATCH' : 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          branchName: formData.get('branch_name'),
          branchCity: formData.get('branch_city'),
          branchAddress: formData.get('branch_address'),
          pets: formData.get('pets')
        })
    }, { cache: 'no-store' })

    router.refresh()
    labelModal.current.click()
  }

  return (
    <div>
      <input type='checkbox' id={modalId} className='modal-toggle' />
      <div className='modal' role='dialog'>
        <div className='modal-box'>
          <form onSubmit={onSubmit}>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Branch Name</span>
              </div>
              <input type='text' name='branch_name' placeholder={'Type here'} defaultValue={branch?.branchName} className='input input-bordered w-full' required />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Pick Branch</span>
              </div>
              <select name='branch_city' className='select select-bordered' defaultValue={branch?.branchCity} required>
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
              <textarea name='branch_address' placeholder={'Type here'} defaultValue={branch?.branchAddress} className='textarea textarea-bordered w-full' required></textarea>
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Type of pets</span>
              </div>
              <select name='pets' className='select select-bordered' defaultValue={branch?.pets} required>
                <option disabled>Pick one</option>
                {config.pets.map(function (pet, index) {
                  return (
                    <option key={index} value={pet}>
                      {pet}
                    </option>
                  );
                })}
              </select>
            </label>
            <div className='modal-action'>
              <button className='btn btn-primary'>{isEdit ? 'Update Branch' : 'Add Branch'}</button>
              <label htmlFor={modalId} className='btn' ref={labelModal}>
                Close
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
