import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../../actions/api';

export default function StudentList({ degree, subject }) {
  const [students, setStudents] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear().toString()); // Default to current year
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Function to fetch students based on current page and batch year
  const fetchStudents = async () => {
    try {
      console.log('Started to fetch students...');
      
      setLoading(true); // Start loading

      // Make the API call to get students based on the current page and batch year
      const data = await apiRequest({
        url: 'https://cgac-backend.onrender.com/students',
        method: 'GET',
        params: { page: currentPage, limit: 100, batch: year },
      });

      console.log('Fetched students data:', data);

      // Update the state with the fetched students data
      setStudents(data.data || []);
      setTotalPages(data.paging.total_page || 1);  // Set total pages for pagination
    } catch (error) {
      console.error('Failed to fetch students:', error);
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  // Fetch students on initial load and whenever currentPage or year changes
  useEffect(() => {
    fetchStudents();  // Fetch the students when currentPage or year changes
  }, [currentPage, year]);  // This triggers every time currentPage or year changes

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle year change
  const handleYearChange = (e) => {
    setYear(e.target.value);  // This will trigger fetchStudents to be called on year change
  };

  // Handle pagination changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);  // This will trigger fetchStudents to be called on page change
  };

  // Check if we need to disable the Next button
  const isNextPageDisabled = () => {
    return currentPage >= totalPages;
  };

  // Filter students based on the search query
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
              onChange={handleYearChange}
              className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Search by Application Number or Name"
              value={searchQuery}
              onChange={handleSearchChange}
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
                <tr key={student._id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{student.applicationNumber}</td>
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.batch}</td>
                  <td className="p-4">
                    <button
                      className="text-blue-600 text-sm hover:text-blue-800"
                      onClick={() => navigate(`/edit-student/${student._id}`)}
                    >
                      Edit
                    </button>
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
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          disabled={isNextPageDisabled()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
