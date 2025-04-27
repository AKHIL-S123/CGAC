import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function StudentList({ degree, subject }) {
  const [students, setStudents] = useState([])
  const [year, setYear] = useState('')

  console.log("aki")
  console.log(degree,subject)

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch(`https://qsyb20b7td.execute-api.ap-south-1.amazonaws.com/dev/application`)
      const data = await response.json()
      console.log(data, "dsdejn")

      setStudents(data?.item)
    }

    fetchStudents()
  }, [degree, year])

  // Filter students by year (if any year is entered)
  const filteredStudents = students.filter(student =>
    year === '' || student.year?.toString() === year
  )

  const navigate  = useNavigate()

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        {/* <h2 className="text-xl font-bold">{`${degree} ${subject}`}</h2> */}
        <div>
          <input
            type="number"
            placeholder="Filter by year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border rounded px-3 py-1 text-sm mx-3"
          />
          <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={() => navigate('/add-student')}>Add student</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-md">
          <thead className="bg-gray-100 text-left">
            <tr>
                 
              <th className="p-3 border-b">Application Number</th>
              <th className="p-3 border-b">Year</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map(student => (
                <tr key={student.id} className="border-t hover:bg-gray-50">
                   <td className="p-3">{student?.applicationNumber}</td>
                  <td className="p-3">{student?.viStandardYearStart}</td>
                  <td className="p-3">
                    <button
                      className="text-blue-600 text-sm"
                      onClick={() => navigate(`/edit-student/${student.id}`)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-3 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )

  // return (<div>
  //   <h1>hi</h1>
  //    </div>

  // )
    
  
}
