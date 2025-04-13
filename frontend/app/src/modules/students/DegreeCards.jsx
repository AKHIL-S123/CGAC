const degrees = [
    "Bachelor of Arts (BA)", "Bachelor of Science (BS)", "Bachelor of Business Administration (BBA)",
    "Bachelor of Fine Arts (BFA)", "Bachelor of Engineering (BEng)", "Bachelor of Nursing (BSN)",
    "Bachelor of Education (BEd)", "Bachelor of Social Work (BSW)", "Bachelor of Information Technology (BIT)",
    "Bachelor of Public Health (BPH)", "Bachelor of Computer Science (BCS)", "Bachelor of Economics (BEcon)",
    "Bachelor of Communication (BC)", "Bachelor of Hospitality Management (BHM)", "Bachelor of Environmental Science (BES)",
    "Bachelor of Criminal Justice (BCJ)", "Bachelor of Graphic Design (BGD)", "Bachelor of Music (BM)",
    "Bachelor of Architecture (BArch)", "Bachelor of Liberal Arts (BLA)"
  ];
  
  export default function DegreeCards({ onSelect }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {degrees.map((degree) => (
          <div
            key={degree}
            onClick={() => onSelect(degree)}
            className="cursor-pointer p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{degree}</h3>
          </div>
        ))}
      </div>
    );
  }
  