import React, { useEffect, useState } from 'react';
import { FaTrash, FaEdit, FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../../actions/api';
import Modal from './Modal'; // Import Modal component
import DeleteStudentButton from './DeleteStudent';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import StudentForm from './StudentForm';
import DynamicTable from '../../components/DynamicTable';
import { FiTrash2 } from 'react-icons/fi';

export default function StudentList({ degree, subject }) {

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'age', label: 'Age', sortable: true },
    { key: 'location', label: 'Location'},
    { key: 'actions', label: 'Actions' },
  ];
  
 

  const scopedSlots = {
    actions: (row) => (
      <div className="flex gap-3">
        <button
          onClick={() =>{
            handleStudentForm('edit')
            setSelectedStudent(row)
          }}
          className="text-blue-500 hover:text-blue-700"
        >
          <FaEdit size={20} />
        </button>
        <button
         onClick={() => handleStudentDeleteForm(row)}
          className="text-red-500 hover:text-red-700 cursor-pointer"
        >
          <FaTrash size={20} />
        </button>
      </div>
    )
  };
  
  const handleSort = (columnKey, direction) => {
    console.log(`Sort by ${columnKey} in ${direction} order`);
    // You can implement the sorting logic here or fetch sorted data from API
  };
  const [students, setStudents] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear().toString()); // Default to current year
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null); // State for the selected student
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [showForm,setShowForm]= useState(false)
  const [editMode,setEditMode] = useState(false);
  const [showDeleteForm,setShowDeleteForm] = useState(false);

  const handleStudentForm = (mode) => {

    console.log("handle mode")

    if (mode=='edit') {
      setShowForm(true);
      setEditMode(true);
    }

    else if (mode=='close') {
      setShowForm(false);
      setEditMode(false);

    }
	 else if (mode=='close_with_refresh') {
      setShowForm(false);
      setEditMode(false);
	  fetchStudents();  

    }
    else {
      setShowForm(true);
    }
  
    console.debug("mode",mode)
  };
  
  

  const handleStudentDeleteForm = (student = null) => {
	console.log("akhill")
	  
    setSelectedStudent(student);
    setShowDeleteForm(true);
    setShowForm(false);       // Prevent form clash
    setEditMode(false);
  };

const handleCloseDeleteForm = ()=>{
	setSelectedStudent(null);
    setShowDeleteForm(false);
	
}


const handleCloseDeleteForm_reload = () =>{
	setSelectedStudent(null);
    setShowDeleteForm(false);
	 fetchStudents(); 
	
}



  const navigate = useNavigate();

  // Fetch students based on current page and batch year
  const fetchStudents = async () => {
    try {
      setLoading(true); // Start loading

      // Make the API call to get students based on the current page and batch year

      console.log("student_list url",`${API_BASE_URL}/students`)
      const data = await apiRequest({
        url: `${API_BASE_URL}/students`,
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
 
  <>
    {!showForm && (
      <div className="p-4 bg-[#CADCFC] rounded-lg shadow-md">
        {/* Filters and Search */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <input
                type="number"
                placeholder="Filter by Batch"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="border bg-white rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
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
              onClick={() => handleStudentForm()}
            >
              Add Student
            </button>
          </div>
        </div>

        {/* Table */}
        <DynamicTable
          columns={columns}
          data={students}
          scopedSlots={scopedSlots}
          onSort={handleSort}
          onRowClick={handleRowClick}
        />

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            disabled={currentPage >= totalPages}
          >
            Next
          </button>
        </div>
      </div>
    )}

    {/* Modal and Forms */}
    <div>
      {isModalOpen && <Modal student={selectedStudent} onClose={closeModal} />}
      {showDeleteForm && (
        <DeleteStudentButton
          studentId={selectedStudent._id}
          handleform={handleCloseDeleteForm_reload}
		  onClose={handleCloseDeleteForm}
        />
      )}
      {showForm && (
        <StudentForm
          editMode={editMode}
          degree="degree"
          handleform={handleStudentForm}
          initialData={selectedStudent}
        />
      )}
    </div>
  </>
 
 
 
 
 
 
 
  ) 
  
  }