import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import ConfirmModal from './ConfirmModal'; // Import modal component
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function DeleteStudentButton({ studentId, handleform }) {
	

  

  const handleDelete = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/students/${studentId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete student');
      }

      toast.success('Student deleted successfully');
      if (handleform) handleform();
    } catch (error) {
      console.error('Error deleting student:', error);
      toast.error('Failed to delete student');
    } finally {
		console.log('deleted')
    }
  };

  return (
    <>
    
        <ConfirmModal
          message="Are you sure you want to delete this student?"
          onConfirm={handleDelete}
		  onCancel={handleform}
        />
   
    </>
  );
}
