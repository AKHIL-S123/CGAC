import { Formik, Form, Field } from 'formik';
import { 
  bloodGroups, courseList,courseTypeList,
  streamList,sex,hostler,schooltype,bankOptions,accountOptions,
  religionOptions,communityOptions,occupationOptions,educationQualificationOptions,mediumOfStudyOptions,yesNoOptions,
  nationalityList,degreeList,
  studentStatusList
 } from './constants';
import { useNavigate, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function StudentForm() {

  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);


    console.log(student?.applicationNumber, "student");
    
  const currentYear = new Date().getFullYear();


  const startYear = 2015;
  const yearOptions = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  );
      

  const startYearb = 2023;
  const yearOptionsBatch = Array.from(
    { length: currentYear - startYearb + 1 },
    (_, i) => startYearb + i
  );

  useEffect(() => {
    if (isEdit) {
      fetch(`${API_BASE_URL}/students/${id}`)
        .then(res => res.json())
        .then(data => setStudent(data))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;

      
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-lg font-bold mb-4">{isEdit ? 'Edit Student' : 'Add New Student'}</h3>
      <Formik
        enableReinitialize={true} 
        initialValues={{
          // student basic info

          name: student?.name || '',
          nameAadhaar:student?.name ||'',
          nameCertificate:student?.name ||'',
          gender: student?.gender || '',
          registerNo: student?.registerNo || '',
          rollNo: student?.rollNo || '',
          emisNo: student?.emisNo || '',
          umisNo: student?.umisNo || '',

          // student personal info

          mobile: student?.mobile || '',
          whatsappNo: student?.whatsappNo || '',
          email: student?.email || '',
          aadhaarNumber: student?.aadhaarNumber || '',
          dateOfBirth: student?.dateOfBirth || '',
          bloodGroup: student?.bloodGroup || '',
          nationality: student?.nationality || '',
          religion: student?.religion || '',
          community: student?.community || '',
          caste: student?.caste || '',
          communityCertificateNo: student?.communityCertificateNo || '',
          pwd: student?.pwd || '',
          typesOfDisability: student?.typesOfDisability || '',
          percentageOfDisability: student?.percentageOfDisability || '',
          exServiceMan: student?.exServiceMan || '',
          ncc: student?.ncc || '',
          sports: student?.sports || '',
          categoryOfSports: student?.categoryOfSports || '',
          presentAddress: student?.presentAddress || '',
          communicationAddress: student?.communicationAddress || '',

          // present address

          // communication address

          // presentHouseNo:
          // presentStreet:
          // presentCity:
          // presentPanchayath
          // taluk
          // district:
          // pin

          // admission information

          applicationNumber: student?.applicationNumber || '',
          rank: student?.rank || '',
          cutoff : student?.cutoff|| '',
          batch : student?.batch || '',
          stream : student?.stream || '',
          degree: student?.degree || '',
          course: student?.course || '',
          courseType: student?.courseType || '',
          mediumOfStudy: student?.mediumOfStudy || '',
          admissionQuota: student?.admissionQuota || '',
          dateOfAdmission: student?.dateOfAdmission || '',
          admissionNumber: student?.admissionNumber || '',
          hostlerOrDayScholar: student?.hostlerOrDayScholar || '',
          studentStatus:student?.studentStatus|| '',
          
          
          
         
          fatherName: student?.fatherName || '',
          fatherMobile: student?.fatherMobile || '',
          fathersOccupation: student?.fathersOccupation || '',
          fathersEducation: student?.fathersEducation || '',
          motherName: student?.motherName || '',
          motherMobile: student?.motherMobile || '',
          mothersOccupation: student?.mothersOccupation || '',
          mothersEducation: student?.mothersEducation || '',
          guardianName: student?.guardianName || '',
          guardianNumber: student?.guardianNumber || '',
          singleParent: student?.singleParent || '',
          singleGirlChild: student?.singleGirlChild || '',
          firstGraduate: student?.firstGraduate || '',
          firstGraduateCertificateNo: student?.firstGraduateCertificateNo || '',
          annualIncome: student?.annualIncome || '',
          incomeCertificateNo: student?.incomeCertificateNo || '',

          //  previous school information
          viStandardSchoolName: student?.viStandardSchoolName || '',
          viStandardCity: student?.viStandardCity || '',
          viStandardType: student?.viStandardType || '',
          viStandardYearStart: student?.viStandardYearStart || '',
          viStandardYearEnd: student?.viStandardYearEnd || '',
          viiStandardSchoolName: student?.viiStandardSchoolName || '',
          viiStandardCity: student?.viiStandardCity || '',
          viiStandardType: student?.viiStandardType || '',
          viiStandardYearStart: student?.viiStandardYearStart || '',
          viiStandardYearEnd: student?.viiStandardYearEnd || '',
          viiiStandardSchoolName: student?.viiiStandardSchoolName || '',
          viiiStandardCity: student?.viiiStandardCity || '',
          viiiStandardType: student?.viiiStandardType || '',
          viiiStandardYearStart: student?.viiiStandardYearStart || '',
          viiiStandardYearEnd: student?.viiiStandardYearEnd || '',
          ixStandardSchoolName: student?.ixStandardSchoolName || '',
          ixStandardCity: student?.ixStandardCity || '',
          ixStandardType: student?.ixStandardType || '',
          ixStandardYearStart: student?.ixStandardYearStart || '',
          ixStandardYearEnd: student?.ixStandardYearEnd || '',
          xStandardSchoolName: student?.xStandardSchoolName || '',
          xStandardCity: student?.xStandardCity || '',
          xStandardType: student?.xStandardType || '',
          xStandardYearStart: student?.xStandardYearStart || '',
          xStandardYearEnd: student?.xStandardYearEnd || '',
          xiStandardSchoolName: student?.xiStandardSchoolName || '',
          xiStandardCity: student?.xiStandardCity || '',
          xiStandardType: student?.xiStandardType || '',
          xiStandardYearStart: student?.xiStandardYearStart || '',
          xiStandardYearEnd: student?.xiStandardYearEnd || '',
          xiiStandardSchoolName: student?.xiiStandardSchoolName || '',
          xiiStandardCity: student?.xiiStandardCity || '',
          xiiStandardType: student?.xiiStandardType || '',
          xiiStandardYearStart: student?.xiiStandardYearStart || '',
          xiiStandardYearEnd: student?.xiiStandardYearEnd || '',
          percentageOfMarksHSC1: student?.percentageOfMarksHSC1 || '',
          percentageOfMarksHSC2: student?.percentageOfMarksHSC2 || '',
          percentageOfMarksSSLC: student?.percentageOfMarksSSLC || '',

        // bank information 

          bankName: student?.bankName || '',
          branch: student?.branch || '',
          ifsc: student?.ifsc || '',
          micr: student?.micr || '',
          accountType: student?.accountType || '',
          bankAccountNo: student?.bankAccountNo || '',

        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {

          const method = isEdit ? "PUT" : "POST";
          console.log(method,"method");

          const url = isEdit ? `${API_BASE_URL}/students/${id}`:`${API_BASE_URL}/students/`

          console.log("url in form of add/edit",url)
          
          try {
            const response = await fetch(url, {
              method: method,
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
            if (response.ok) {
              setSubmitting(false);

              const a = values.course
              const b = values.degree
             console.log("aaaaaaaaaa",a,b)
              const formattedCourse = values.course.replace(/\s+/g, '_');
              const formattedDegree = values.degree.replace(/\s+/g, '_');
              console.log("xxxxxxxxxxxxxx",`/departments/${formattedDegree}-${formattedCourse}`)
              navigate(`/departments/${formattedDegree}-${formattedCourse}`);
              navigate(-1)
              // resetForm();
              // onSuccess();
            } else {
              throw new Error('Failed to save student');
            }
          } catch (error) {
            console.error(error);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 ">
            {/* 1st div ******************************************************/}
             {/************************************  STUDENT BASIC INFO************************************** */}
             <h1 className='text-30px font-bold  text-center'> STUDENT BASIC INFO </h1>
            <div className='grid grid-cols-3 gap-4'>
            <div>
              <label className="block text-sm text-gray-600">Name</label>
              <Field name="name" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">As in AADHAAR</label>
              <Field name="nameAadhaar" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">As in Certificate</label>
              <Field name="nameCertificate" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Gender</label>
              <Field as="select" name="gender" className="border px-3 py-2 rounded w-full" >
              {sex.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
                    </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Register No</label>
              <Field name="registerNo" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Roll No.</label>
              <Field name="rollNo" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">EMIS No.</label>
              <Field name="emisNo" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">UMIS No.</label>
              <Field name="umisNo" className="border px-3 py-2 rounded w-full" />
            </div>
          
              
            </div>

            {/************************************  STUDENT PERSONAL INFO************************************** */}
            <h1 className='text-30px font-bold  text-center'> STUDENT PERSONAL INFO </h1>
            <div className='grid grid-cols-4 gap-4'>
            <div>
              <label className="block text-sm text-gray-600">Mobile</label>
              <Field name="mobile" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">WhatsApp No</label>
              <Field name="whatsappNo" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <Field name="email" type="email" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Aadhaar Number</label>
              <Field name="aadhaarNumber" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Date of Birth</label>
              <Field name="dateOfBirth" type="date" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Blood Group</label>
              <Field as="select" name="bloodGroup" className="border px-3 py-2 rounded w-full">
                    {bloodGroups.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
                </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Nationality</label>
              <Field as="select" name="nationality" className="border px-3 py-2 rounded w-full">
                    {nationalityList.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
                </Field>
            </div>

            <div>
              <label className="block text -sm text-gray-600">Religion</label>
              <Field as="select" name="religion" className="border px-3 py-2 rounded w-full" >
              {religionOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Community</label>
              <Field as = "select" name="community" className="border px-3 py-2 rounded w-full" >
              
              {communityOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Caste</label>
              <Field name="caste" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Community Certificate No</label>
              <Field name="communityCertificateNo" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">PwD</label>
              <Field as='select' name="pwd" className="border px-3 py-2 rounded w-full" >
              {yesNoOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Types of Disability</label>
              <Field name="typesOfDisability" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Percentage of Disability</label>
              <Field name="percentageOfDisability" type="number" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Ex-Service Man</label>
              <Field name="exServiceMan" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">NCC</label>
              <Field name="ncc" className="border px-3 py-2 rounded w-full" />
              </div>
            <div>
              <label className="block text-sm text-gray-600">Sports</label>
              <Field name="sports" className="border px-3 py-2 rounded w-full" />
           
            </div>

            <div>
              <label className="block text-sm text-gray-600">Category of Sports</label>
              <Field name="categoryOfSports" className="border px-3 py-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Present Address</label>
              <Field name="presentAddress" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Communication Address</label>
              <Field name="communicationAddress" className="border px-3 py-2 rounded w-full" />
            </div>

            </div>
                  
           {/************************************  ADMISSION INFO************************************** */}
           <h1 className='text-30px font-bold  text-center'> ADMISSION INFORMATION </h1>

           
                    
           <div className='grid grid-cols-4 gap-4'>

           <div>
              <label className="block text-sm text-gray-600">Application Number</label>
              <Field name="applicationNumber" className="border px-3 py-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Rank</label>
              <Field name="rank" className="border px-3 py-2 rounded w-full" />

            </div>
            <div>
              <label className="block text-sm text-gray-600">Cut Off</label>
              <Field name="cutoff" className="border px-3 py-2 rounded w-full" />
            </div>
            <div> 
              <label className="block text-sm text-gray-600">Batch</label>
              <Field as="select" name="batch" className="border px-3 py-2 rounded w-full">
             
              {yearOptionsBatch.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}

            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Stream</label>
              <Field as='select' name="stream" className="border px-3 py-2 rounded w-full">
              {streamList.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
              </Field>
            </div>

            <div>
              <label className="block text-sm text-gray-600">Degree</label>
              <Field  as='select' name="degree" className="border px-3 py-2 rounded w-full">
              {degreeList.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
                    </Field>

            </div>
            <div>
              <label className="block text-sm text-gray-600">Course Type</label>
              <Field  as='select' name="courseType" className="border px-3 py-2 rounded w-full">
              {courseTypeList.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
                    </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Course</label>
              <Field as='select' name="course" className="border px-3 py-2 rounded w-full" >
              {courseList.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
                    </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Medium of Study</label>
              <Field as='select' name="mediumOfStudy" className="border px-3 py-2 rounded w-full" >
              
              {mediumOfStudyOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Admission Quota</label>
              <Field name="admissionQuota" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Date of Admission</label>
              <Field name="dateOfAdmission" type="date" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Admission Number</label>
              <Field name="admissionNumber" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Hostler / Day Scholar</label>
              <Field as='select' name="hostlerOrDayScholar" className="border px-3 py-2 rounded w-full">
              
              {hostler.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
                    </Field>
              
            </div>
            <div>
              <label className="block text-sm text-gray-600">Student Status</label>
              <Field as='select' name="studentStatus" className="border px-3 py-2 rounded w-full">
              
              {studentStatusList.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
                    </Field>
              
            </div>

           </div>

            {/************************************  FAMILY INFO************************************** */}
            <h1 className='text-30px font-bold  text-center'> FAMILY INFORMATION </h1>
            <div className='grid grid-cols-4 gap-4'>
            <div>
              <label className="block text-sm text-gray-600">Father Name</label>
              <Field name="fatherName" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Mobile Number</label>
              <Field name="fatherMobile" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Father's Occupation</label>
              <Field  as="select" name="fathersOccupation" className="border px-3 py-2 rounded w-full" >
              {occupationOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
              
            </div>
            <div>
              <label className="block text-sm text-gray-600">Father's Educational Qualification</label>
              <Field as="select" name="fathersEducation" className="border px-3 py-2 rounded w-full" >
              {educationQualificationOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>

            <div>
            <label className="block text-sm text-gray-600">Mother Name</label>
            <Field name="motherName" className="border px-3 py-2 rounded w-full" />
            </div>

            <div>
            <label className="block text-sm text-gray-600">Mobile Number</label>
              <Field name="motherMobile" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Mother's Occupation</label>
              <Field as = "select" name="mothersOccupation" className="border px-3 py-2 rounded w-full">
              {occupationOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Mother's Educational Qualification</label>
              <Field as = "select" name="mothersEducation" className="border px-3 py-2 rounded w-full" >
              {educationQualificationOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Guardian Name</label>
              <Field name="guardianName" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Guardian Number</label>
              <Field name="guardianNumber" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Single Parent</label>
              <Field as = "select" name="singleParent" className="border px-3 py-2 rounded w-full" >
               {yesNoOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Single Girl Child</label>
              <Field as = "select" name="singleGirlChild" className="border px-3 py-2 rounded w-full" >
               {yesNoOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>

            <div>
              <label  className="block text-sm text-gray-600">First Graduate</label>
              <Field as='select' name="firstGraduate" className="border px-3 py-2 rounded w-full">
              {yesNoOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">First Graduate Certificate No.</label>
              <Field name="firstGraduateCertificateNo" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Income Certificate No.</label>
              <Field name="incomeCertificateNo" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Annual Income</label>
              <Field name="annualIncome" type="number" className="border px-3 py-2 rounded w-full" />
            </div>
           

              </div>
            {/* ******************************  SCHOOL INFO *********************************/}
            <h1 className='text-30px font-bold  text-center'> PREVIOUS SCHOOL INFORMATION </h1>
            <div className='grid grid-cols-4 gap-4'>
            <div>
              <label className="block text-sm text-gray-600">VI Standard School Name</label>
              <Field name="viStandardSchoolName" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">City of School</label>
              <Field name="viStandardCity" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              
              <label className="block text-sm text-gray-600">Type of School</label>
              <Field as="select" name="viStandardType" className="border px-3 py-2 rounded w-full">
              {schooltype.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Year of Study</label>
              <div className='flex justify-between'>
              <Field as="select" name="viStandardYearStart" className="border px-3 py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
              <Field as="select" name="viStandardYearEnd" className=" border px-3  py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
            </div> 

            </div>
            <div>
              <label className="block text-sm text-gray-600">VII Standard School Name</label>
              <Field name="viiStandardSchoolName" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">City of School</label>
              <Field name="viiStandardCity" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Type of School</label>
              <Field as="select" name="viiStandardType" className="border px-3 py-2 rounded w-full" >

              {schooltype.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Year of Study</label>
              
              <div className='flex justify-between'>
              <Field as="select" name="viiStandardYearStart" className="border px-3 py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
              <Field as="select" name="viiStandardYearEnd" className=" border px-3  py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
            </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600">VIII Standard School Name</label>
              <Field name="viiiStandardSchoolName" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">City of School</label>
              <Field name="viiiStandardCity" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Type of School</label>
              <Field as="select" name="viiiStandardType" className="border px-3 py-2 rounded w-full" >
              {schooltype.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
                    </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Year of Study</label>
              <div className='flex justify-between'>
              <Field as="select" name="viiStandardYearStart" className="border px-3 py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
              <Field as="select" name="viiStandardYearEnd" className=" border px-3  py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
            </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600">IX Standard School Name</label>
              <Field name="ixStandardSchoolName" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">City of School</label>
              <Field name="ixStandardCity" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Type of School</label>
              <Field as = "select" name="ixStandardType" className="border px-3 py-2 rounded w-full">
              {schooltype.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
                      </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Year of Study</label>
              <div className='flex justify-between'>
              <Field as="select" name="ixStandardYearStart" className="border px-3 py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
              <Field as="select" name="ixStandardYearEnd" className=" border px-3  py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
            </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600">X Standard School Name</label>
              <Field name="xStandardSchoolName" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">City of School</label>
              <Field name="xStandardCity" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Type of School</label>
              <Field as = "select" name="xStandardType" className="border px-3 py-2 rounded w-full" >
              {schooltype.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
                      </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Year of Study</label>
              <div className='flex justify-between'>
              <Field as="select" name="xStandardYearStart" className="border px-3 py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
              <Field as="select" name="xStandardYearEnd" className=" border px-3  py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
            </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600">XI Standard School Name</label>
              <Field name="xiStandardSchoolName" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">City of School</label>
              <Field name="xiStandardCity" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Type of School</label>
              <Field as='select' name="xiStandardType" className="border px-3 py-2 rounded w-full" >
              {schooltype.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>

            </div>
            <div>
              <label className="block text-sm text-gray-600">Year of Study</label>
              <div className='flex justify-between'>
              <Field as="select" name="xiStandardYearStart" className="border px-3 py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
              <Field as="select" name="xiStandardYearEnd" className=" border px-3  py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
            </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600">XII Standard School Name</label>
              <Field name="xiiStandardSchoolName" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">City of School</label>
              <Field name="xiiStandardCity" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Type of School</label>

            <Field as="select" name="xiiStandardType" className="border px-3 py-2 rounded w-full">
                    {schooltype.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
        
            </div>
            <div>
              <label className="block text-sm text-gray-600">Year of Study</label>
              <div className='flex justify-between'>
              <Field as="select" name="xiiStandardYearStart" className="border px-3 py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
              <Field as="select" name="xiiStandardYearEnd" className=" border px-3  py-2 rounded w-[45%]">
             
              {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </Field>
            </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600">Percentage of Marks in +2</label>
              <Field name="percentageOfMarksHSC2" type="number" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Percentage of Marks in +1</label>
              <Field name="percentageOfMarksHSC1" type="number" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Percentage of Marks in 10</label>
              <Field name="percentageOfMarksSSLC" type="number" className="border px-3 py-2 rounded w-full" />
            </div>
           
              
            </div>
            <h1 className='text-30px font-bold  text-center'> BANK INFO </h1>
            {/* 4th div */}
            <div className='grid grid-cols-3 gap-4'>
            <div>
              <label className="block text-sm text-gray-600">Bank Name</label>
              <Field as = "select" name="bankName" className="border px-3 py-2 rounded w-full">
              {bankOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Branch</label>
              <Field name="branch" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">IFSC</label>
              <Field name="ifsc" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">MICR</label>
              <Field name="micr" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Type of Account</label>
              <Field as = "select" name="accountType" className="border px-3 py-2 rounded w-full" >
              {accountOptions.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                    ))}
            </Field>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Account No</label>
              <Field name="bankAccountNo" className="border px-3 py-2 rounded w-full" />
            </div>
            </div>

            {/* 5th div */}
         
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {student ? 'Update' : 'Add'} Student
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}