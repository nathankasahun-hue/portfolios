/* All portfolio content lives here. Leave a value empty ("" or []) to hide it. */
const IMG = {
  profile: "assets/images/profile.png",
  fulwaha: "assets/images/fulwaha-project.jpg",
  batching: "assets/images/image.png",
  airport: "assets/images/image copy.png"
};
const DATA = {
  cv: "assets/docs/Nathan_Birhane_CV.pdf",
  name: "Nathan Birhane",
  title: "Material Engineer",
  description: "Construction materials, quality control, laboratory testing, concrete technology, and site coordination.",
  location: "Addis Ababa, Ethiopia",
  linkedin: "https://www.linkedin.com/in/nathan-birhane29/",
  phone: "",   // TODO: add from your CV
  email: "",   // TODO: add from your CV
  about: [
    "I am a Material Engineer working in construction materials, material testing and quality control. My work covers laboratory procedures, concrete and aggregate testing, material verification, site coordination and technical reporting.",
    "I also work with asphalt materials and Marshall mix design, and hold a B.Sc. in Construction Technology and Management from Adigrat University."
  ],
  focus: ["Construction Materials","Material Testing","Concrete Technology","QA/QC","Laboratory Testing","Site Coordination","Asphalt / Marshall Mix Design","Technical Reporting"],
  experience: [
    { status: "Current", role: "Material Engineer", org: "Bole Airport Headquarters", dates: "",
      points: ["Material checking and quality verification","Material testing and technical reporting"] },
    { status: "Previous", role: "Material Engineer / Site Engineer", org: "Cappadocia Real Estate: Fulwaha 2B+G+15 project", dates: "",
      points: ["Material checking and quality verification","Quantity take-off and rebar quantity calculation","Measurement of completed works","Site coordination"] },
    { status: "Previous", role: "Laboratory Technician / Site Coordinator / Material Engineer", org: "National Premix Construction PLC: batching plant", dates: "",
      points: ["Concrete and aggregate testing","Mix design","Material quality control","Site coordination and reporting"] }
  ],
  projects: [
    { id: "fulwaha", name: "Fulwaha 2B+G+15", category: "Building Construction", role: "Material Engineer / Site Engineer",
      image: IMG.fulwaha, alt: "Fulwaha 2B+G+15 high-rise building project",
      summary: "High-rise building construction.",
      points: ["Material checking and quality verification","Quantity take-off and rebar quantity calculation","Measurement of completed works"],
      more: "Role held with Cappadocia Real Estate." },
    { id: "batching", name: "National Premix Batching Plant", category: "Concrete Production", role: "Laboratory Technician / Site Coordinator / Material Engineer",
      image: IMG.batching, alt: "National Premix concrete batching plant",
      summary: "Concrete production and material quality control.",
      points: ["Concrete and aggregate testing","Mix design","Quality control at the batching plant"],
      more: "Role held with National Premix Construction PLC." },
    { id: "airport", name: "Bole Airport Headquarters", category: "Material Engineering & QC", role: "Material Engineer",
      image: IMG.airport, alt: "Bole Airport Headquarters project",
      summary: "Material engineering and quality control.",
      points: ["Material checking and quality verification","Material testing and technical reporting"],
      more: "Current position." }
  ],
  skills: {
    "Materials Testing": ["Concrete Testing","Aggregate Testing","Sand Testing","Silt Content Testing","Specific Gravity","SSD Condition","Slump Testing","Compressive Strength Testing"],
    "Concrete Technology": ["Concrete Mix Design","Batching Plant QC","Concrete Quality Control","Material Selection","Concrete Inspection"],
    "QA/QC": ["Quality Control","Quality Verification","Compliance Checking","Technical Reporting","Inspection"],
    "Construction": ["Site Coordination","Quantity Take-Off","Rebar Quantity Calculation","Measurement of Completed Works","Drawing Interpretation"],
    "Asphalt": ["Marshall Mix Design","Asphalt Materials Testing","Aggregate Testing","Asphalt Quality Control"],
    "Languages": ["Tigrinya — Fluent","Amharic — Fluent","English — Fluent"]
  },
  software: ["AutoCAD","Microsoft Word","Microsoft Excel","Microsoft Office"],
  education: { degree: "B.Sc. in Construction Technology and Management", school: "ADIGRAT UNIVERSITY, ETHIOPIA",
    text: "Degree in construction technology and management, the foundation for my work in construction materials and quality control." },
  certifications: [],  // e.g. { name: "", issuer: "", year: "" }
  achievements: []     // e.g. { title: "", text: "" }
};
