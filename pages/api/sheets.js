import { fetchSheetData, appendSheetData } from "../../app/utils/googleSheets";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await fetchSheetData("Sheet1");
      res.status(200).json({ data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }

  if (req.method === "POST") {
    try {
      const { values } = req.body;
      await appendSheetData("Sheet1", values);
      res.status(200).json({ message: "Data added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to append data" });
    }
  }
}
