
  


import { useNavigate, useLocation } from 'react-router-dom';

export default function DegreeCards() {

  const degrees = [
    // UG Arts
    { degree: "B.A", subject: "Tamil_Literature" },
    { degree: "B.A", subject: "English_Literature" },
    { degree: "B.A", subject: "History" },
    { degree: "B.A", subject: "Economics" },
    { degree: "BBA", subject: "Business_Administration" },
  
    // UG Science
    { degree: "B.Sc", subject: "Mathematics" },
    { degree: "B.Sc", subject: "Physics" },
    { degree: "B.Sc", subject: "Chemistry" },
    { degree: "B.Sc", subject: "Zoology" },
    { degree: "B.Sc", subject: "Computer_Science" },
    { degree: "B.Sc", subject: "Costume_Design_and_Fashion" },
    { degree: "BCA", subject: "Computer_Applications" },
  
    // UG Commerce
    { degree: "B.Com", subject: "Accountancy_and_Business_Statistics" },
    { degree: "B.Com", subject: "Computer_Applications" },
    { degree: "B.Com", subject: "International_Business" },
  
    // PG Arts
    { degree: "M.A", subject: "Tamil_Literature" },
    { degree: "M.A", subject: "English_Literature" },
    { degree: "M.A", subject: "Economics" },
  
    // PG Science
    { degree: "M.Sc", subject: "Mathematics" },
    { degree: "M.Sc", subject: "Physics" },
    { degree: "M.Sc", subject: "Chemistry" },
    { degree: "M.Sc", subject: "Zoology" },
    { degree: "M.Sc", subject: "Computer_Science" },
    { degree: "M.Sc", subject: "Costume_Design_and_Fashion" },
  
    // PG Commerce
    { degree: "M.Com", subject: "Commerce" },
    { degree: "M.Com", subject: "International_Business" },
  
    // Research Programs
    { degree: "MPhil", subject: "Tamil" },
    { degree: "MPhil", subject: "English" },
    { degree: "MPhil", subject: "Economics" },
    { degree: "MPhil", subject: "History" },
    { degree: "MPhil", subject: "Mathematics" },
    { degree: "MPhil", subject: "Physics" },
    { degree: "MPhil", subject: "Chemistry" },
    { degree: "MPhil", subject: "Zoology" },
    { degree: "MPhil", subject: "Computer_Science" },
    { degree: "MPhil", subject: "Costume_Design_and_Fashion" },
    { degree: "MPhil", subject: "Commerce" },
  
    { degree: "PhD", subject: "Tamil" },
    { degree: "PhD", subject: "English" },
    { degree: "PhD", subject: "Economics" },
    { degree: "PhD", subject: "History" },
    { degree: "PhD", subject: "Mathematics" },
    { degree: "PhD", subject: "Physics" },
    { degree: "PhD", subject: "Chemistry" },
    { degree: "PhD", subject: "Zoology" },
    { degree: "PhD", subject: "Computer_Science" },
    { degree: "PhD", subject: "Costume_Design_and_Fashion" },
    { degree: "PhD", subject: "Commerce" }
  ];
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = ({ degree, subject }) => {
    const key = `${degree}-${subject}`; // For URL
    navigate(`${location.pathname}/${key}`);
  };

  const formatDisplay = ({ degree, subject }) => {
    const prettySubject = subject.replace(/_/g, ' ');
    return `(${degree}) ${prettySubject} `;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {degrees.map((deg) => (
        <div
          key={`${deg.degree}-${deg.subject}`}
          onClick={() => handleSelect(deg)}
          className="cursor-pointer p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            {formatDisplay(deg)}
          </h3>
        </div>
      ))}
    </div>
  );
}
