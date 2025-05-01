import { useState } from 'react'
import DegreeCards from '../modules/students/DegreeCards'
// import StudentList from '../modules/students/StudentList'
// import StudentForm from '../modules/students/StudentForm'

export default function Departments() {
  const [selectedDegree, setSelectedDegree] = useState(null)

  return (
    <div className="p-6 ">
        <DegreeCards onSelect={setSelectedDegree} />

    </div>
  )
}
