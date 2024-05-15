'use client';

import { useState } from 'react';
import { EditModal } from './editModal';

export const AddEditModal = ({ id }) => {
  const [isModalOPen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        className='bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 transition-colors'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Edit
      </button>
      <EditModal
        id={id}
        isOpen={isModalOPen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};
