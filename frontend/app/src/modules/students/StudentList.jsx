import React, { useEffect, useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../../actions/api';
import Modal from './Modal'; // Import Modal component
import DeleteStudentButton from './DeleteStudent';

export default function StudentList({ degree, subject }) {
  const [students, setStudents] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear().toString()); // Default to current year
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null); // State for the selected student
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const navigate = useNavigate();

  // Fetch students based on current page and batch year
  const fetchStudents = async () => {
    try {
      setLoading(true); // Start loading

      // Make the API call to get students based on the current page and batch year
      const data = await apiRequest({
        url: 'https://cgac-backend.onrender.com/students',
        method: 'GET',
        params: { page: currentPage, limit: 100, batch: year },
      });

      setStudents(data.data || []);
      setTotalPages(data.paging.total_page || 1);  // Set total pages for pagination
    } catch (error) {
      console.error('Failed to fetch students:', error);
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  useEffect(() => {
    fetchStudents();  // Fetch the students when currentPage or year changes
  }, [currentPage, year]);

  const handleRowClick = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const filteredStudents = students.filter(
    (student) =>
      (searchQuery === '' ||
        student.applicationNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Filters and Search */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Filter by Batch"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Search by Application Number or Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            onClick={() => navigate('/add-student')}
          >
            Add Student
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-gray-50 p-4 rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-300 rounded-md">
          <thead className="bg-gray-100 text-left text-sm shadow-md">
            <tr>
              <th className="p-4 border-b">Application Number</th>
              <th className="p-4 border-b">Name</th>
              <th className="p-4 border-b">Batch</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="max-h-60 overflow-y-auto">
            {loading ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr
                  key={student._id}
                  className="border-t hover:bg-gray-50 cursor-pointer"
                  // Open the modal on row click
                >
                  <td className="p-4"  onClick={() => handleRowClick(student)}>{student.applicationNumber}</td>
                  <td className="p-4"  onClick={() => handleRowClick(student)}>{student.name}</td>
                  <td className="p-4"  onClick={() => handleRowClick(student)}>{student.batch}</td>
                  <td className="p-4 flex justify-around">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/edit-student/${student._id}`);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <FaEdit size={20} />
                    </button>

                      <DeleteStudentButton
                        studentId={student._id}
                        onDeleteSuccess={fetchStudents}
                      />
                    </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && <Modal student={selectedStudent} onClose={closeModal} />}
    </div>
  );
}
