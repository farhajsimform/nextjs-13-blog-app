import type { NextApiRequest, NextApiResponse } from "next";
import allProducts from "../../db.json";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ allProducts: allProducts });
}
