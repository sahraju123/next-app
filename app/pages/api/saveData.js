// // pages/api/saveData.js
// import { saveData } from "../../lib/db/saveData";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { column1, column2 } = req.body;

//     try {
//       await saveData(column1, column2);
//       res.status(200).json({ message: "Data saved successfully!" });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to save data" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }


// pages/api/saveData.js


import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { column1, column2 } = req.body;

    connection.query(
      'INSERT INTO TableA (column1, column2) VALUES (?, ?)',
      [column1, column2],
      (err, result) => {
        if (err) {
          console.error('Database error:', err.message);
          res.status(500).json({ success: false, message: 'Error saving data', error: err.message });
        } else {
          res.status(200).json({ success: true, message: 'Data saved successfully', result });
        }
      }
    );
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
