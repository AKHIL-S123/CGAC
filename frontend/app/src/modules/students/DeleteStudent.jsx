import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import ConfirmModal from './ConfirmModal'; // Import modal component
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function DeleteStudentButton({ studentId, onDeleteSuccess }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/students/${studentId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete student');
      }

      toast.success('Student deleted successfully');
      if (onDeleteSuccess) onDeleteSuccess();
    } catch (error) {
      console.error('Error deleting student:', error);
      toast.error('Failed to delete student');
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(true);
        }}
        className="text-red-600 hover:text-red-800 ml-2"
        title="Delete"
      >
        <FaTrash size={20} />
      </button>

      {isModalOpen && (
        <ConfirmModal
          message="Are you sure you want to delete this student?"
          onConfirm={handleDelete}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
