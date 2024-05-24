'use client';

import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

export default function Reservation({ isReservation }) {
  const [valueDatePicker, setValueDatePicker] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const reservationPakages = [
    {
      id: 1,
      name: 'Basic',
      price: 100000,
      includeService: ['Boarding Accommodations', 'Feeding and Hydration'],
    },
    {
      id: 2,
      name: 'Extra',
      price: 150000,
      includeService: ['Boarding Accommodations', 'Feeding and Hydration', 'Exercise and Playtime'],
    },
    {
      id: 3,
      name: 'Super',
      price: 350000,
      includeService: ['Boarding Accommodations', 'Feeding and Hydration', 'Exercise and Playtime', 'Grooming Services'],
    },
  ];

  const handleValueChangeOnDatePicker = (newValue) => {
    setValueDatePicker(newValue);
  };

  return (
    <div className={'mt-9 ' + (isReservation ? 'visible' : 'hidden')}>
      <h2 className='text-2xl font-bold'>Reservation Form</h2>
      <form>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>What is your pet name ?</span>
          </div>
          <input name='pet_name' required type='text' placeholder='Type here' className='input input-bordered w-full max-w-xs' />
        </label>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Number of pets</span>
          </div>
          <input name='pet_number' required type='text' placeholder='Type here' className='input input-bordered w-full max-w-xs' />
        </label>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Pick you pet type</span>
          </div>
          <select required defaultValue={'Pick one'} name='pet_type' className='select select-bordered'>
            <option disabled>Pick one</option>
            <option value='Dog'>Dog</option>
            <option value='Cat'>Cat</option>
            <option value='Rabbit'>Rabbit</option>
          </select>
        </label>
        {/* <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Insert Pet Picture</span>
          </div>
          <input type='file' name='pet_image' required className='file-input file-input-bordered w-full max-w-xs' />
        </label> */}
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Pick your package</span>
          </div>
          <select required defaultValue={'Pick one'} name='package' className='select select-bordered'>
            <option disabled>Pick one</option>
            {reservationPakages.map(function (pack) {
              return (
                <option key={pack.name} value={pack.name}>
                  {pack.name} | IDR {pack.price} | {pack.includeService.join(', ')}
                </option>
              );
            })}
          </select>
        </label>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Choose your date</span>
          </div>
          <Datepicker inputClassName='bg-base-100 input input-bordered w-full max-w-xs' primaryColor={'fuchsia'} value={valueDatePicker} onChange={handleValueChangeOnDatePicker} />
        </label>
        <label className='form-control w-full max-w-xs '>
          <div className='label'>
            <span className='label-text'>Special treatment for your pet</span>
          </div>
          <textarea className='textarea textarea-bordered h-24 w-full max-w-xs' name='special_treatment' placeholder='Let us know'></textarea>
        </label>
        <button className='btn btn-active btn-neutral mt-2 w-full max-w-xs'>Book</button>
      </form>
    </div>
  );
}
