import React, { useEffect, useState } from 'react'
import StudentForm from '../modules/students/StudentForm'
import { useParams } from 'react-router-dom';

const CreateStudent = () => {
    const params = useParams();
    const { id } = params
    console.log(id, "idddd");

    const [students, setStudents] = useState([])

    useEffect(() => {
        const fetchStudents = async () => {
            if (id) {

                const response = await fetch(`https://qsyb20b7td.execute-api.ap-south-1.amazonaws.com/dev/application/${id}`)
                const data = await response.json()
                setStudents(data?.item)
            }
        }

        fetchStudents()
    }, [])


    return (
        <>
            <StudentForm id={id} student={id ?students : null} />
        </>

    )
}

export default CreateStudent