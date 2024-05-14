'use client';

import { useState } from 'react';
import { RegisterModal } from './RegisterModal';

export const AddRegisterModal = () => {
  const [isModalOPen, setIsModalOpen] = useState(false);

  return (
    <div className='py-4'>
      <button
        className='bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 transition-colors'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Add User
      </button>
      <RegisterModal
        isOpen={isModalOPen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};
