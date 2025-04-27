import { useState } from 'react'
import StudentList from '../modules/students/StudentList'
import { useParams } from 'react-router-dom';

export default function Students() {
  const { department } = useParams();
  const [degree, ...subjectParts] = department.split('-');

  const subject = subjectParts.join('_').replace(/_/g, ' ');


  return (
    <div className="p-6">
          <StudentList degree={degree} subject={subject} />
    </div>
  )
}
