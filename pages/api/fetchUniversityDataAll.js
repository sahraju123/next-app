// // /pages/api/fetchUniversityDataAll.js

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const handler = async (req, res) => {
//   if (req.method === 'GET') {
//     try {
//       // Fetch all universities from the database
//       const universities = await prisma.university.findMany();
//       return res.status(200).json(universities);
//     } catch (error) {
//       console.error("Error fetching universities:", error);
//       return res.status(500).json({ error: "Error fetching universities" });
//     }
//   } else {
//     // Handle other HTTP methods if needed
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }
// };

// export default handler; // Default export
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      // Fetch all universities from the database
      const universities = await prisma.university.findMany();

      // Group universities by state
      const statesData = universities.reduce((acc, university) => {
        const state = university.state; // Use 'state' field from your schema
        if (!acc[state]) {
          acc[state] = [];
        }
        acc[state].push({
          name: university.name,
          domain: university.domain,
          detail: university.detail || "",
          acceptanceRate: university.acceptanceRate,
          graduationRate: university.graduationRate,
          tuitionFee: university.tuitionFee,
          agent: university.agent || "",
          smallNote: university.smallNote || "",
          costOfAttendance: university.costOfAttendance,
          scholarships: university.scholarships || "",
          applicationFee: university.applicationFee || "",
        });
        return acc;
      }, {});

      // Return the grouped data as a JSON response
      return res.status(200).json(statesData);
    } catch (error) {
      console.error("Error fetching universities:", error);
      return res.status(500).json({ error: "Error fetching universities" });
    }
  } else {
    // Handle other HTTP methods if needed
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handler; // Default export
