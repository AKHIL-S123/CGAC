import { Formik, Form, Field } from 'formik';

export default function StudentForm({ degree, student, onSuccess, id }) {
    console.log(student?.applicationNumber, "student");
    
    const bloodGroups = [ 
        { value: '', label: 'Select Blood Group' },
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'AB+', label: 'AB+' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' },
      ];
    
      const sex = [
        { value: '', label: 'Select Gender' },
        { value: 'Female', label: 'Female' },
        { value: 'Male', label: 'Male' },
        { value: 'Third Gender', label: 'Third Gender' }
      ]

      const hostler =[
        { value: '', label: 'Select' },
        { value: 'hostler', label: 'Hostler' },
        { value: 'day-scholar', label: 'Day Scholar' }
      ]

      const schooltype = [
        { value: '', label: 'Select' },
        { value: 'govt', label: 'Govt' },
        { value: 'fully-aided', label: 'Fully Aided' },
        { value: 'partly-aided', label: 'Partly Aided' },
        { value: 'private', label: 'Private' }
      ];

      const bankOptions = [
        { value: '', label: 'Select Bank Name' },
        { value: 'sbi', label: 'SBI' },
        { value: 'ib', label: 'IB' },
        { value: 'canara', label: 'CANARA' },
        { value: 'iob', label: 'IOB' },
        { value: 'india-postal-bank', label: 'India Postal Bank' },
        { value: 'bob', label: 'BoB' },
        { value: 'ub', label: 'UB' },
        { value: 'boi', label: 'BOI' },
        { value: 'others', label: 'Others' }
      ];
  

      const accountOptions = [
        
        { value: '', label:'Select Account Type' },
        { value: 'self', label: 'Self' },
        { value: 'joint', label: 'Joint' }
       
      ]
    

      const religionOptions = [
        { value: '', label: 'Select Religion' },
        { value: 'hindu', label: 'Hindu' },
        { value: 'christian', label: 'Christian' },
        { value: 'muslim', label: 'Muslim' },
        { value: 'others', label: 'Others' }
      ];

      const communityOptions = [
        { value: '', label: 'Select Community' },
        { value: 'oc', label: 'OC' },
        { value: 'bc', label: 'BC' },
        { value: 'mbc', label: 'MBC' },
        { value: 'bcm', label: 'BCM' },
        { value: 'sc', label: 'SC' },
        { value: 'sca', label: 'SCA' },
        { value: 'st', label: 'ST' },
        { value: 'dnc-dnt', label: 'DNC/DNT' }
      ];


      const occupationOptions = [
        { value: '', label: 'Select Occupation' },
        { value: 'govt', label: 'Govt' },
        { value: 'ngo', label: 'NGO' },
        { value: 'home-maker', label: 'Home Maker' },
        { value: 'business', label: 'Business' },
        { value: 'labour', label: 'Labour' }
      ];

      const educationQualificationOptions = [
        { value: '', label: 'Select Qualification' },
        { value: 'primary', label: 'Primary' },
        { value: 'middle', label: 'Middle' },
        { value: 'high-school', label: 'High School' },
        { value: 'hsc', label: 'Hsc' },
        { value: 'graduate', label: 'Graduate' }
      ];

      const mediumOfStudyOptions = [
        { value: '', label: 'Select Medium' },
        { value: 'tamil', label: 'Tamil' },
        { value: 'english', label: 'English' }
      ];

      const yesNoOptions = [
        { value: '', label: 'Select Option' },
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ];

      const yearOptions = Array.from({ length: 50 }, (_, i) => 2000 + i); // 2000 - 2049
      
      
      
      

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-lg font-bold mb-4">{id ? 'Edit Student' : 'Add New Student'}</h3>
      <Formik
        enableReinitialize={true} 
        initialValues={{
          applicationNumber: student?.applicationNumber || '',
          rank: student?.rank || '',
          registerNo: student?.registerNo || '',
          rollNo: student?.rollNo || '',
          emisNo: student?.emisNo || '',
          umisNo: student?.umisNo || '',
          degree: degree || '',
          course: student?.course || '',
          courseType: student?.courseType || '',
          cutoff : student?.cutoff|| '',
          batch : student?.batch || '',
          stream : student?.stream || '',
          mediumOfStudy: student?.mediumOfStudy || '',
          percentageOfMarks: student?.percentageOfMarks || '',
          mobile: student?.mobile || '',
          whatsappNo: student?.whatsappNo || '',
          name: student?.name || '',
          nameAadhaar:student?.name ||'',
          nameCertificate:student?.name ||'',
          email: student?.email || '',
          aadhaarNumber: student?.aadhaarNumber || '',
          religion: student?.religion || '',
          community: student?.community || '',
          caste: student?.caste || '',
          communityCertificateNo: student?.communityCertificateNo || '',
          dateOfBirth: student?.dateOfBirth || '',
          gender: student?.gender || '',
          bloodGroup: student?.bloodGroup || '',
          pwd: student?.pwd || '',
          typesOfDisability: student?.typesOfDisability || '',
          percentageOfDisability: student?.percentageOfDisability || '',
          exServiceMan: student?.exServiceMan || '',
          ncc: student?.ncc || '',
          sports: student?.sports || '',
          categoryOfSports: student?.categoryOfSports || '',
          admissionQuota: student?.admissionQuota || '',
          studentStatus:student?.studentStatus|| '',
          dateOfAdmission: student?.dateOfAdmission || '',
          admissionNumber: student?.admissionNumber || '',
          presentAddress: student?.presentAddress || '',
          communicationAddress: student?.communicationAddress || '',
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
          ixStandardYeartart: student?.ixStandardYearStart || '',
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
          bankName: student?.bankName || '',
          branch: student?.branch || '',
          ifsc: student?.ifsc || '',
          micr: student?.micr || '',
          accountType: student?.accountType || '',
          bankAccountNo: student?.bankAccountNo || '',
          hostlerOrDayScholar: student?.hostlerOrDayScholar || '',
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {

          const method = student ? "PUT" : "POST";
          console.log(method,"method");

          const url = student ? `https://qsyb20b7td.execute-api.ap-south-1.amazonaws.com/dev/application/${id}` : "https://qsyb20b7td.execute-api.ap-south-1.amazonaws.com/dev/application";
          
          try {
            const response = await fetch(url, {
              method: method,
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ ...values, degree }),
            });
            if (response.ok) {
              setSubmitting(false);
              resetForm();
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
              <label className="block text-sm text-gray-600">batch</label>
              <Field name="batch" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Stream</label>
              <Field name="stream" className="border px-3 py-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Degree</label>
              <Field name="degree" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Course Type</label>
              <Field name="courseType" className="border px-3 py-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Course</label>
              <Field name="course" className="border px-3 py-2 rounded w-full" />
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
              
              {hostler.map((group) => (
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
              <label className="block text-sm text -gray-600">City of School</label>
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
              <Field name="percentageOfMarks" type="number" className="border px-3 py-2 rounded w-full" />
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