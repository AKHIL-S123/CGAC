import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import StudentList from '../modules/students/StudentList';

export default function Students() {
  const { department } = useParams();
console.log(department,"oooooooooooooooooooooooooooooo")
  const { degree, subject } = useMemo(() => {
    const [deg, ...subjectParts] = department.split('-');
    return {
      degree: deg,
      subject: subjectParts.join('_').replace(/_/g, ' '),
    };
  }, [department]); // Only recompute if `department` changes

  return (
    <div className="p-6">
      <StudentList degree={degree} subject={subject} />
    </div>
  );
}
