import React, { useEffect, useRef } from 'react';

export default function Modal({ student, onClose }) {
  const modalRef = useRef(null);

  // Close the modal when clicking outside of the modal content
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener for clicks outside the modal
    document.addEventListener('mousedown', handleOutsideClick);

    // Cleanup event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  if (!student) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-500/75 transition-opacity">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Student Details</h2>
          <button
            onClick={onClose}
            className="text-red-600 text-2xl font-bold"
          >
            X
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
          <Detail label="Application Number" value={student.applicationNumber} />
          <Detail label="Name" value={student.name} />
          <Detail label="Batch" value={student.batch} />
          <Detail label="Register No" value={student.registerNo} />
          <Detail label="Roll No" value={student.rollNo} />
          <Detail label="Degree" value={student.degree} />
          <Detail label="Course" value={student.course} />
          <Detail label="Course Type" value={student.courseType} />
          <Detail label="Mobile" value={student.mobile} />
          <Detail label="Whatsapp No" value={student.whatsappNo} />
          <Detail label="Email" value={student.email} />
          <Detail label="Aadhaar Number" value={student.aadhaarNumber} />
          <Detail label="Gender" value={student.gender} />
          <Detail label="Blood Group" value={student.bloodGroup} />
          <Detail label="Religion" value={student.religion} />
          <Detail label="Community" value={student.community} />
          <Detail label="Caste" value={student.caste} />
          <Detail label="Father Name" value={student.fatherName} />
          <Detail label="Father Mobile" value={student.fatherMobile} />
          <Detail label="Mother Name" value={student.motherName} />
          <Detail label="Mother Mobile" value={student.motherMobile} />
          <Detail label="Guardian Name" value={student.guardianName} />
          <Detail label="Guardian Number" value={student.guardianNumber} />
          <Detail label="Hostler / Day Scholar" value={student.hostlerOrDayScholar} />
          <Detail label="Annual Income" value={student.annualIncome} />
          <Detail label="Bank Name" value={student.bankName} />
          <Detail label="IFSC" value={student.ifsc} />
          <Detail label="Account No" value={student.bankAccountNo} />
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-md font-medium">{value || '—'}</p>
    </div>
  );
}
