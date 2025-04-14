import { useState } from 'react'
import DegreeCards from '../modules/students/DegreeCards'
import StudentList from '../modules/students/StudentList'
import StudentForm from '../modules/students/StudentForm'

export default function Students() {
  const [selectedDegree, setSelectedDegree] = useState(null)
  const [editingStudent, setEditingStudent] = useState(null)
  const [refresh, setRefresh] = useState(false)

  const triggerRefresh = () => {
    setEditingStudent(null)
    setRefresh(!refresh)
  }

  return (
    <div className="p-6">
      {!selectedDegree ? (
        <DegreeCards onSelect={setSelectedDegree} />
      ) : (
        <>
          <button onClick={() => setSelectedDegree(null)} className="text-sm text-blue-500 mb-4">
            ← Back to Programs
          </button>

          <StudentList degree={selectedDegree} onEdit={setEditingStudent} key={refresh} />
          {/* <StudentForm degree={selectedDegree} student={editingStudent} onSuccess={triggerRefresh} /> */}
        </>
      )}
    </div>
  )
}
