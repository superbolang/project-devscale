'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reservation from './Reservation';

export function BranchDetail({ branch, isLogin }) {
  const [isReservation, setIsReservation] = useState(false);
  const [isShowAlert, setShowALert] = useState(false)

  async function handleClick() {
    console.log(isLogin)

    if (isLogin) {
      setIsReservation(true);
    } else {
      setShowALert(true)
    } 
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
      {isShowAlert ? (
        <div role="alert" className="alert alert-warning">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>Please Login to do Reservation</span>
        </div>
      ) : (
        <>
           <Image src='/images/branch.jpg' className='card rounded-box w-[500px] justify-self-center' alt='' width={500} height={500} />
            <div>
              <h1 className='text-2xl font-bold'>{branch.branchName}</h1>
              <div className='indicator mt-3'>
                <div className='indicator-item indicator-bottom'>
                  <button className='btn btn-primary' onClick={handleClick}>
                    Reservation
                  </button>
                </div>
                <div className='card border w-[500px] bg-fuchsia-100'>
                  <div className='card-body'>
                    <h2 className='card-title'>City : {branch.branchCity}</h2>
                    <p>Address : {branch.branchAddress}</p>
                  </div>
                </div>
              </div>
              <Reservation isReservation={isReservation} />
            </div>
        </>
      )}
    </div>
  );
}
