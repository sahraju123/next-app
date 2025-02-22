// 'use client'

// import React, { useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// // TopoJSON for US states
// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas/states-10m.json";

// // Data: States and universities
// const statesData: Record<string, string[]> = {

//     "Arizon" : ["The University of Alabama, Tuscaloosa, Alabama",],
//     "Arkansas" : [],
//     "California": ["Stanford University", "UC Berkeley", "UCLA"],
//     "Colorado" : [],
//     "Connecticut" : [],
//     "Delaware" : [],
//     "Florida" : [],
//     "Georgia" : [],
//     "Idaho": [],
//     "Illinois" : [],
//     "Indiana" : [],
//     "Kansas" : [],
//     "Kentucky" : [],
//     "Louisiana" : [],
//     "Maryland" : [],
//     "Massachusetts" : [],
//     "Michigan" : [],
//     "Minnesota" : [],
//     "Mississippi" : [],
//     "Missouri" : [],
//     "Montana" : [],
//     "Nebraska" : [],
//     "Nevada" : [],
//     "New Hampshire" : [],
//     "New Jersey" : [],
//     "New Mexico" : [],
//     "New York City" : [],
//     "North Carolina" : [],
//     "South Carolina" : [],
//     "Ohio" : [],
//     "Oklahoma" : [],
//     "Oregon" : [],
//     "Pennsylvania" : [],
//     "Rhode Island" : [],
//     "South Dakota" : [],
//     "Tennessee" : [],

//     "Texas": ["University of Texas at Austin", "Texas A&M University", "Rice University"],
//     "Utah" : [],
//     "Virginia" : [],
//     "Washington" : [],
//     "Washington_DC" : [],
//     "West_Virginia" : [],
//     "Wisconsin" : [],

// };

// export default function InteractiveMap() {
//   const [selectedState, setSelectedState] = useState<string | null>(null);

//   const handleStateClick = (geo: any) => {
//     console.log(geo)
//     const stateName = geo.properties.name;
//     if (statesData[stateName]) {
//       setSelectedState(stateName);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <ComposableMap projection="geoAlbersUsa" className="w-full h-auto">
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 onClick={() => handleStateClick(geo)}
//                 style={{
//                   default: { fill: "#D6D6DA", outline: "none" },
//                   hover: { fill: "#4A90E2", outline: "none" },
//                   pressed: { fill: "#2C3E50", outline: "none" },
//                 }}
//               />
//             ))
//           }
//         </Geographies>
//       </ComposableMap>

//       {/* Universities Display */}
//       {selectedState && (
//         <div className="mt-6 w-full max-w-4xl px-4">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//             Universities in {selectedState}
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {statesData[selectedState].map((university, index) => (
//               <div
//                 key={index}
//                 className="p-4 bg-white shadow-lg rounded-lg border border-gray-200"
//               >
//                 <h3 className="text-lg font-medium text-gray-700">{university}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// 'use client'

// import React, { useState } from "react";
// import InteractiveNavBar from "../components/navigation/InteractiveNavBar"
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// // TopoJSON for US states
// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas/states-10m.json";

// // Data: States and universities
// const statesData: Record<string, string[]> = {
//   Arizona: ["The University of Alabama, Tuscaloosa, Alabama"],
//   Arkansas: [],
//   California: ["Stanford University", "UC Berkeley", "UCLA"],
//   Colorado: [],
//   Connecticut: [],
//   Delaware: [],
//   Florida: [],
//   Georgia: [],
//   Idaho: [],
//   Illinois: [],
//   Indiana: [],
//   Kansas: [],
//   Kentucky: [],
//   Louisiana: [],
//   Maryland: [],
//   Massachusetts: [],
//   Michigan: [],
//   Minnesota: [],
//   Mississippi: [],
//   Missouri: [],
//   Montana: [],
//   Nebraska: [],
//   Nevada: [],
//   "New Hampshire": [],
//   "New Jersey": [],
//   "New Mexico": [],
//   "New York City": [],
//   "North Carolina": [],
//   "South Carolina": [],
//   Ohio: [],
//   Oklahoma: [],
//   Oregon: [],
//   Pennsylvania: [],
//   "Rhode Island": [],
//   "South Dakota": [],
//   Tennessee: [],
//   Texas: ["University of Texas at Austin", "Texas A&M University", "Rice University"],
//   Utah: [],
//   Virginia: [],
//   Washington: [],
//   "Washington DC": [],
//   "West Virginia": [],
//   Wisconsin: [],
// };

// export default function InteractiveMap() {
//   const [selectedState, setSelectedState] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   const handleStateClick = (geo: any) => {
//     const stateName = geo.properties.name;
//     if (statesData[stateName]) {
//       setSelectedState(stateName);
//       setSearchQuery(""); // Reset search query when a state is clicked
//     }
//   };

//   // Filter universities based on the search query
//   const filteredUniversities =
//     selectedState && searchQuery
//       ? statesData[selectedState].filter((university) =>
//           university.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       : statesData[selectedState] || [];

//   return (
//     <div className="flex flex-col items-center h-auto  pb-8">
//       <InteractiveNavBar/>

//       <ComposableMap projection="geoAlbersUsa" className="w-full h-auto">
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 onClick={() => handleStateClick(geo)}
//                 style={{
//                   default: { fill: "#D6D6DA", outline: "none" },
//                   hover: { fill: "#4A90E2", outline: "none" },
//                   pressed: { fill: "#2C3E50", outline: "none" },
//                 }}
//               />
//             ))
//           }
//         </Geographies>
//       </ComposableMap>

//       {/* Search Bar */}
//       {selectedState && (
//         <div className="mt-6 w-full max-w-4xl px-4">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//             Universities in {selectedState}
//           </h2>
//           <input
//             type="text"
//             placeholder="Search for a university..."
//             className="w-full p-3 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {filteredUniversities.length > 0 ? (
//               filteredUniversities.map((university, index) => (
//                 <div
//                   key={index}
//                   className="p-4 bg-white shadow-lg rounded-lg border border-gray-200"
//                 >
//                   <h3 className="text-lg font-medium text-gray-700">{university}</h3>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500 col-span-full">No universities found.</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
'use client';

import React, { useState, useEffect } from "react";
import InteractiveNavBar from "../components/navigation/InteractiveNavBar";
import { Link } from "@nextui-org/react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,

} from "react-simple-maps";
import { UI } from "../components";
import ProfessionalCards from "@/app/components/ui/professionalcards";
import { useGlobalContext } from "@/app/context/GlobalContext";
// import { statesData } from "./Data";

// TopoJSON for US states
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas/states-10m.json";

// Mapping states to their positions for labels
const stateLabels: Record<string, { coordinates: [number, number] }> = {
  Alabama: { coordinates: [-86.9023, 32.3182] },
  Arizona: { coordinates: [-111.0937, 34.0489] },
  Arkansas: { coordinates: [-92.3731, 34.7465] },
  California: { coordinates: [-119.4179, 37.7749] },
  Colorado: { coordinates: [-105.7821, 39.5501] },
  Connecticut: { coordinates: [-72.757, 41.6032] },
  Delaware: { coordinates: [-75.5277, 38.9108] },
  Florida: { coordinates: [-81.5158, 27.9944] },
  Georgia: { coordinates: [-83.5002, 32.1656] },
  Idaho: { coordinates: [-114.742, 44.0682] },
  Illinois: { coordinates: [-89.3985, 40.6331] },
  Indiana: { coordinates: [-86.1349, 40.2672] },
  Iowa: { coordinates: [-93.0977, 41.878] },
  Kansas: { coordinates: [-98.4842, 39.0119] },
  Kentucky: { coordinates: [-84.270, 37.839] },
  Louisiana: { coordinates: [-92.1450, 30.9843] },
  Maryland: { coordinates: [-76.6413, 39.0458] },
  Massachusetts: { coordinates: [-71.3824, 42.4072] },
  Michigan: { coordinates: [-85.6024, 44.3148] },
  Minnesota: { coordinates: [-94.6859, 46.7296] },
  Mississippi: { coordinates: [-89.3985, 32.3547] },
  Missouri: { coordinates: [-91.8318, 37.9643] },
  Montana: { coordinates: [-110.3626, 46.8797] },
  Nebraska: { coordinates: [-99.9018, 41.4925] },
  Nevada: { coordinates: [-116.4194, 38.8026] },
  "New Hampshire": { coordinates: [-71.5724, 43.1939] },
  "New Jersey": { coordinates: [-74.4057, 40.0583] },
  "New Mexico": { coordinates: [-105.8701, 34.5199] },
  "New York": { coordinates: [-75.4999, 43.2994] },
  "North Carolina": { coordinates: [-79.0193, 35.7596] },
  "North Dakota": { coordinates: [-101.002, 47.5515] },
  Ohio: { coordinates: [-82.9071, 40.4173] },
  Oklahoma: { coordinates: [-97.0929, 35.0078] },
  Oregon: { coordinates: [-120.5542, 43.8041] },
  Pennsylvania: { coordinates: [-77.1945, 41.2033] },
  "Rhode Island": { coordinates: [-71.4774, 41.5801] },
  "South Carolina": { coordinates: [-81.1637, 33.8361] },
  "South Dakota": { coordinates: [-99.9018, 43.9695] },
  Tennessee: { coordinates: [-86.5804, 35.5175] },
  Texas: { coordinates: [-99.9018, 31.9686] },
  Utah: { coordinates: [-111.902, 39.3210] },
  Vermont: { coordinates: [-72.5778, 44.5588] },
  Virginia: { coordinates: [-78.6569, 37.4316] },
  Washington: { coordinates: [-120.7401, 47.7511] },
  "Washington DC": { coordinates: [-77.0369, 38.9072] },
  "West Virginia": { coordinates: [-80.4549, 38.5976] },
  Wisconsin: { coordinates: [-89.6015, 43.7844] },
  Wyoming: { coordinates: [-107.2903, 43.0759] },
};

// Data: States and universities
// const stateData = async () => {

//     try {
//       const response = await fetch('/api/fetchUniversityDataAll');
//       if (response.ok) {
//         const data = await response.json();
//         return data;
//       } else {
//         console.error("Failed to fetch universities");
//       }
//     } catch (error) {
//       console.error("Error fetching universities:", error);
//     }
  
//   const statesData = stateData()

// Fetch university logo
async function fetchUniversityLogo(domain: string): Promise<string | null> {
  try {
    return `https://logo.clearbit.com/${domain}`;
  } catch (error) {
    console.error(`Error fetching logo for ${domain}:`, error);
    return null;
  }
}

export default function InteractiveMap() {
  const [statesData, setUniversities] = useState<Record<string, Array<{ name: string, domain: string }>>>({});
  const [selectedState, setSelectedState] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [logoCache, setLogoCache] = useState<Record<string, string>>({});
  const { isOpen, setIsOpen } = useGlobalContext();
  const { universityUrl, setUniversityUrl } = useGlobalContext();

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch('/api/fetchUniversityDataAll');
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setUniversities(data);
        } else {
          console.error("Failed to fetch universities");
        }
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchUniversities();
  }, []);

  const handleOpenModal = (url: string) => {
    setUniversityUrl(url);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setUniversityUrl('');
  };

  const handleStateClick = (geo: GeoJSON.Feature<GeoJSON.Polygon, { name: string }>) => {
    const stateName = geo.properties.name;
    if (statesData[stateName]) {
      setSelectedState(stateName);
      setSearchQuery(""); // Reset search query when a state is clicked
    }
  };
  useEffect(() => {
    if (selectedState) {
      statesData[selectedState].forEach(async (university) => {
        if (!logoCache[university.name]) {
          const logo = await fetchUniversityLogo(university.domain);
          setLogoCache((prev) => ({ ...prev, [university.name]: logo || "" }));
        }
      });
    }
  }, [selectedState,logoCache]);


  const filteredUniversities =
    selectedState && searchQuery
      ? statesData[selectedState].filter((university) =>
        university.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      : statesData[selectedState] || [];

  return (
    <div className="flex flex-col items-center ">
      <InteractiveNavBar />
      <div className="d"><h1>Select your State!</h1></div>


      <ComposableMap projection="geoAlbersUsa" className="w-full h-auto">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <React.Fragment key={geo.rsmKey}>
                <Geography
                  geography={geo}
                  onClick={() => handleStateClick(geo)}
                  style={{
                    default: { fill: "#D6D6DA", outline: "none" },
                    hover: { fill: "#4A90E2", outline: "none" },
                    pressed: { fill: "#2C3E50", outline: "none" },
                  }}
                />
                {/* Add State Names */}
                {stateLabels[geo.properties.name] && (
                  <Annotation
                    subject={stateLabels[geo.properties.name].coordinates}
                    dx={0}
                    dy={0}
                    connectorProps={{}}
                  >
                    <text
                      x="0"
                      y="0"
                      textAnchor="middle"
                      style={{
                        fontSize: "8px",
                        fill: "#4A4A4A",
                        fontWeight: "bold",
                      }}
                    >
 {/* {`${geo.properties.name} ${
    stateData[geo.properties.name] ? stateData[geo.properties.name].length : 0
  }`}                     */}
  {`${geo.properties.name}`} 
  </text>
                  </Annotation>
                )}
              </React.Fragment>
            ))
          }
        </Geographies>
      </ComposableMap>

      {/* Search Bar */}
      {selectedState && (
        <div className="mt-6 w-full max-w-4xl px-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Universities in {selectedState}
          </h2>
          <input
            type="text"
            placeholder="Search for a university..."
            className="w-full p-3 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((university, index) => (
                <div
                  key={index}>

                  <ProfessionalCards
                    name={university.name}
                    url={university.domain}
                    image={logoCache[university.name]}
                    cardbody={false}
                    redirect={true} 
                    
                    >
                    
                    <Link
                      isExternal
                      showAnchorIcon
                      onClick={() => handleOpenModal(`https://${university.domain}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      Visit this University .
                    </Link>
                    {/* <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => handleOpenModal(`https://${university.domain}`)}
                    >
                      Visit Website
                    </button> */}


                  </ProfessionalCards>

                  <UI.Modal isOpen={isOpen} onClose={handleCloseModal} url={universityUrl} />



                </div>


              ))
            ) : (
              <p className="text-gray-500 col-span-full">No universities found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


//Above code is the final working prototype as is hosted in vercel
// app/ucan/page.tsx

// 'use client';

// import React, { useState, useEffect } from 'react';
// import InteractiveNavBar from "@/app/components/navigation/InteractiveNavBar";
// import ProfessionalCards from "@/app/components/ui/professionalcards";
// import { Link } from "@nextui-org/react";

// const InteractiveMap = () => {
//   const [universities, setUniversities] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Fetch universities from the API
//   useEffect(() => {
//     const fetchUniversities = async () => {
//       try {
//         const response = await fetch('/api/fetchUniversityDataAll');
//         if (response.ok) {
//           const data = await response.json();
//           setUniversities(data);
//         } else {
//           console.error("Failed to fetch universities");
//         }
//       } catch (error) {
//         console.error("Error fetching universities:", error);
//       }
//     };

//     fetchUniversities();
//   }, []);

//   // Filter universities based on search query
//   const filteredUniversities = universities.filter((university) =>
//     university.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col items-center">
//       <InteractiveNavBar />
//       <h1>Select your State!</h1>

//       <div className="mt-6 w-full max-w-4xl px-4">
//         <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//           Universities
//         </h2>
//         <input
//           type="text"
//           placeholder="Search for a university..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full p-3 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {filteredUniversities.length > 0 ? (
//             filteredUniversities.map((university, index) => (
//               <div key={index}>
//                 <ProfessionalCards
//                   name={university.name}
//                   url={university.domain}
//                   cardbody={false}
//                   redirect={true}
//                   details={university.detail}
//                 >
//                   <Link
//                     isExternal
//                     showAnchorIcon
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="cursor-pointer"
//                   >
//                     Visit this University.
//                   </Link>
//                 </ProfessionalCards>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 col-span-full">No universities found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveMap;
