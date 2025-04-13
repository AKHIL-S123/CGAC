import { useEffect, useState } from 'react'

export default function StudentList({ degree, onEdit }) {
  const [students, setStudents] = useState([])
  const [year, setYear] = useState('')

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch(`http://localhost:8000/students?degree=${degree}&year=${year}`)
      const data = await response.json()
      setStudents(data)
    }

    fetchStudents()
  }, [degree, year])

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{degree}</h2>
        <input
          type="number"
          placeholder="Filter by year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded px-3 py-1 text-sm"
        />
      </div>
      <ul className="space-y-4">
        {students.map(student => (
          <li
            key={student.id}
            className="bg-gray-100 p-4 rounded-md flex justify-between items-center"
          >
            <span>{student.name} – {student.year}</span>
            <button
              className="text-blue-600 text-sm"
              onClick={() => onEdit(student)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
